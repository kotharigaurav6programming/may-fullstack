import path from 'path';
import { fileURLToPath } from 'url';
import uuid4 from 'uuid4';
import studentSchema from '../model/studentSchema.js';
import { message, status } from '../utils/statusMessage.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import announcementSchema from '../model/announcementSchema.js';
import classAssignedToStudentSchema from '../model/classAssignedToStudentSchema.js';
import mealSchema from '../model/mealSchema.js';
import timeTableSchema from '../model/timeTableSchema.js';
import assignmentSchema from '../model/assignmentSchema.js';
dotenv.config();
const STUDENT_SECRET_KEY = process.env.STUDENT_SECRET_KEY;

export const addStudentController = async (request, response) => {
    try {
        const filename = request.files.profile;
        request.body.password = await bcrypt.hash(request.body.password, 10);
        // console.log("filename : ",filename);
        // const studentData = request.body;   
        // console.log("studentData : ",studentData);
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        // console.log(__dirname);

        const fileName = new Date().getTime() + filename.name;
        const pathName = path.join(__dirname.replace("\\controller", "") + '/public/studentProfile/' + fileName);
        filename.mv(pathName, async (error) => {
            if (error) {
                console.log("Error while dealing with a student profile pic : ", error);
                response.render("index.ejs");
            } else {
                request.body.studentId = uuid4();
                request.body.profile = fileName;
                const result = await studentSchema.create(request.body);
                console.log("Result : ", result);
                response.render("studentLogin.ejs", { message: message.ADMIN_NOT_VERIFIED_YET, status: status.SUCCESS });
            }
        });
    } catch (error) {
        console.log("Error in addStudent : ", error);
        response.render("index.ejs", { message: "", status: "" });
    }
}

export const studentLoginController = async (request, response) => {
    try {
        response.render("studentLogin.ejs", { message: "", status: "" });
    } catch (error) {
        console.log("Error in studentLoginController : ", error);
        response.render("studentLogin.ejs", { message: message.SOMETHING_WENT_WRONG, status: status.ERROR });
    }
}

export const loginStudentController = async (request, response) => {
    try {
        const { email, password } = request.body;
        const studentObj = await studentSchema.findOne({ email: email });

        if (studentObj) {
            if (studentObj.adminVerify == 'Verified') {
                const existingPassword = studentObj.password;
                const status = await bcrypt.compare(password, existingPassword);
                const studentStatus = studentObj.status;
                if (status && studentStatus) {
                    const studentPayload = {
                        email: email,
                        role: "student"
                    }
                    const expiryTime = {
                        expiresIn: "365d"
                    }
                    const token = jwt.sign(studentPayload, STUDENT_SECRET_KEY, expiryTime);
                    response.cookie('student_jwt', token, { httpOnly: true, maxAge: 720000 * 60 * 60 });

                    // announcement data code starts
                    const studentObj = await studentSchema.findOne({ email: email });
                    // console.log("studentObj : ",studentObj);
                    
                    const studentId = studentObj.studentId;
                    // console.log("studentId : ",studentId);
                    
                    const studentDataArray = await classAssignedToStudentSchema.find({ studentId });
                    // console.log("studentDataArray : ",studentDataArray);
                    
                    const announcementDataArray = await announcementSchema.find();
                    // console.log("AnnouncementDataArray  : ",announcementDataArray);
                    
                    const finalDataArray = [];
                    if (studentDataArray.length != 0 && announcementDataArray.length != 0) {
                        for (var i = 0; i < studentDataArray.length; i++) {
                            const check = {
                                $and: [
                                    { teacherId: studentDataArray[i].teacherId },
                                    { classId: studentDataArray[i].classId },
                                    { currentSession: studentDataArray[i].currentSession }
                                ]
                            }
                            const data = await announcementSchema.find(check);
                            finalDataArray.push(data);
                        }
                        // console.log("finalDataArray : ",finalDataArray);
                    
                        response.render("studentHome.ejs", { finalDataArray: finalDataArray.flat(), email:email, message: "", status: "" });
                    } else
                        response.render("studentHome.ejs", { finalDataArray: finalDataArray.flat(), email: email, message: "", status: "" });
                    // announcement data code ends

                    // response.render("studentHome.ejs",{email:email,message:"",status:""});
                } else {
                    response.render("studentLogin.ejs", { message: message.INCORRECT_PASSWORD, status: status.ERROR });
                }
            } else {
                response.render("studentLogin.ejs", { message: message.ADMIN_NOT_VERIFIED_YET, status: status.ERROR });
            }
        } else {
            response.render("studentLogin.ejs", { message: message.INCORRECT_EMAIL, status: status.ERROR });
        }
    } catch (error) {
        console.log("Error in loginStudentController : ", error);
        response.render("studentLogin.ejs", { message: message.SOMETHING_WENT_WRONG, status: status.ERROR });
    }
}

export const studentHomeController = async (request, response) => {
    try {
        const studentObj = await studentSchema.findOne({ email: request.studentPayload.email });
        const studentId = studentObj.studentId;
        const studentDataArray = await classAssignedToStudentSchema.find({ studentId });
        const announcementDataArray = await announcementSchema.find();
        const finalDataArray = [];
        if (studentDataArray.length != 0 && announcementDataArray.length != 0) {
            for (var i = 0; i < studentDataArray.length; i++) {
                const check = {
                    $and: [
                        { teacherId: studentDataArray[i].teacherId },
                        { classId: studentDataArray[i].classId },
                        { currentSession: studentDataArray[i].currentSession }
                    ]
                }
                const data = await announcementSchema.find(check);
                finalDataArray.push(data);
            }
            response.render("studentHome.ejs", { finalDataArray : finalDataArray.flat(), email: request.studentPayload.email, message: "", status: "" });
        } else
            response.render("studentHome.ejs", { finalDataArray: finalDataArray.flat(), email: request.studentPayload.email, message: "", status: "" });
    } catch (error) {
        console.log("Error in studentHomeController : ", error);
        response.render("studentLogin.ejs", { message: message.SOMETHING_WENT_WRONG, status: status.ERROR });
    }
}

export const viewMealController = async(request,response)=>{
    try{
        const studentObj = await studentSchema.findOne({email:request.studentPayload.email});
        const studentId = studentObj.studentId;
        const classATSObj = await classAssignedToStudentSchema.findOne({studentId});
        const status = {
            $and : [
                {classId : classATSObj.classId},
                {teacherId : classATSObj.teacherId},
                {currentSession : classATSObj.currentSession}
            ]
        } 
        const mealArray = await mealSchema.find(status);
        response.render("viewMealMenu.ejs",{mealArray,email: request.studentPayload.email, message: "", status: "" });
    }catch(error){
        console.log("Error in viewMealController : ", error);
        response.render("studentLogin.ejs", { message: message.SOMETHING_WENT_WRONG, status: status.ERROR });
    }
}

export const viewTimeTableController = async(request,response)=>{
    try{
        const studentObj = await studentSchema.findOne({email:request.studentPayload.email});
        const studentId = studentObj.studentId;
        const classATSObj = await classAssignedToStudentSchema.findOne({studentId});
        const status = {
            $and : [
                {classId : classATSObj.classId},
                {teacherId : classATSObj.teacherId},
                {currentSession : classATSObj.currentSession}
            ]
        } 
        const timeTableArray = await timeTableSchema.find(status);
        response.render("viewTimeTable.ejs",{timeTableArray,email: request.studentPayload.email, message: "", status: "" });
    }catch(error){
        console.log("Error in viewTimeTableController : ", error);
        response.render("studentLogin.ejs", { message: message.SOMETHING_WENT_WRONG, status: status.ERROR });
    }
}

export const viewAssignmentController = async(request,response)=>{
    try{
        const studentObj = await studentSchema.findOne({email:request.studentPayload.email});
        const studentId = studentObj.studentId;
        const classATSObj = await classAssignedToStudentSchema.findOne({studentId});
        const status = {
            $and : [
                {classId : classATSObj.classId},
                {teacherId : classATSObj.teacherId},
                {currentSession : classATSObj.currentSession}
            ]
        } 
        const assignmentArray = await assignmentSchema.find(status);
        response.render("viewAssignment.ejs",{assignmentArray,email: request.studentPayload.email, message: "", status: "" });
    }catch(error){
        console.log("Error in viewAssignmentController : ", error);
        response.render("studentLogin.ejs", { message: message.SOMETHING_WENT_WRONG, status: status.ERROR });
    }
}