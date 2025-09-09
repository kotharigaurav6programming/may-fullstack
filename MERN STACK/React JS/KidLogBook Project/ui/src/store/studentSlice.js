import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { requestedStudentURL } from "../utils.js";
import jscookie from 'js-cookie';
var studentToken = jscookie.get("studentToken");

const initialState={
    loggedInEmail : '',
    status : '',
    studentObj : {},
    message:'',
    finalDataArray : []
}
const studentLoginThunk = createAsyncThunk('studentSlice/studentLoginThunk',async(studentObj)=>{
    var result;
    try{
        result = await axios.post(requestedStudentURL+'/studentLogin',studentObj);
        console.log("result on frontend side : ",result);  
        jscookie.set("studentToken",result.data.studentToken,{expires:1});
        jscookie.set("studentEmail",result.data.email,{expires:1});
        console.log("Final Data Array : ",result);
        return result;
    }catch(error){
        console.log("Error inside studentLoginThunk : ",error);
        return result;
    }
});

const studentRegistrationThunk = createAsyncThunk('studentSlice/studentRegistrationThunk',async(studentObj)=>{
    try{
        const result = await axios.post(requestedStudentURL+'/addStudent',studentObj);
        console.log("result on frontend side : ",result);  
        return result;
    }catch(error){
        console.log("Error inside StudentRegistrationThunk : ",error);
    }
});


const studentSlice = createSlice({
    name:'studentSlice',
    initialState,
    reducers:{
        resetMessage:(state,action)=>{
            state.message = action.payload;
        }
    },
    extraReducers:(builder)=>{
         builder
                .addCase(studentLoginThunk.pending,(state)=>{})
                .addCase(studentLoginThunk.fulfilled,(state,action)=>{
                    console.log("inside extra reducers : ",action);
                    state.status = action.payload?.status;
                    if(state.status==200){
                        state.loggedInEmail = action.payload.data.email;
                        state.finalDataArray = action.payload.data.finalDataArray;
                    }
                    if(state.status==401)
                        state.message = "Incorrect Email or Password"
                    if(state.status==500 || state.status==undefined)
                        state.message = "Something went wrong"
                })
                .addCase(studentLoginThunk.rejected,(state)=>{})
        
        builder
        .addCase(studentRegistrationThunk.pending,(state)=>{})
        .addCase(studentRegistrationThunk.fulfilled,(state,action)=>{
            console.log("inside extra reducers : ",action);
            state.status = action.payload.status;
            if(state.status==200){
                state.message = "Needs to wait for 24 Hours for Admin Approval";
            }
            if(state.status==500)
                state.message = "Something went wrong";
        })
        .addCase(studentRegistrationThunk.rejected,(state)=>{})

    }
});

export {studentRegistrationThunk,studentLoginThunk};
export const {resetMessage} = studentSlice.actions;
export default studentSlice.reducer;