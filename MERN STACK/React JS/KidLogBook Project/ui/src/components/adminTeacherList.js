import '../style.css';
import login from '../assets/images/login.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setNavShow } from '../store/commonSlice.js';
import { adminTeacherListThunk, adminVerifyTeacherThunk, resetMessage } from '../store/adminSlice.js';
function AdminTeacherList(){
    const adminObj = useSelector(state=>state.admin);
    {
        console.log("teacher list : ",adminObj.teacherArray);
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if(adminObj.status==401 || adminObj.status==500)
        navigate('/adminLogin');

    useEffect(()=>{
        console.log("---------executes----------------");
        
        dispatch(setNavShow("admin"));
        dispatch(resetMessage(' '));
        dispatch(adminTeacherListThunk());
    },[]); 
    const handleSubmit = (teacherObj)=>{
        {console.log("onclick data : ",teacherObj);}
        dispatch(adminVerifyTeacherThunk(teacherObj));
    }
    return (<div>
        <center><h2>Teacher list</h2></center>
        <h2>{adminObj.message}</h2>
        <table align='center' border={1} cellSpacing={0} cellPadding={2}>
            <tr>
                <th>S.No</th>
                <th>TeacherId</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Qualification</th>
                <th>Experience</th>
                <th>Date</th>
                <th>Gender</th>
                <th>AdminVerify</th>
                <th>status</th>
            </tr>
            {
                adminObj.teacherArray.map((teacher,index)=>{
                    return (<tr>
                        <td>{index+1}</td>
                        <td>{teacher.teacherId}</td>
                        <td>{teacher.name}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.contact}</td>
                        <td>{teacher.address}</td>
                        <td>{teacher.qualification}</td>
                        <td>{teacher.experience}</td>
                        <td>{teacher.date}</td>
                        <td>{teacher.gender}</td>
                        <td>
                            {(teacher.adminVerify=="Verified")?(<button style={{width:"100px",marginLeft:"10px",backgroundColor:"green"}}>Verified</button>):(<button onClick={()=>{handleSubmit(teacher)}} style={{width:"100px",marginLeft:"10px",backgroundColor:"crimson"}}>{teacher.adminVerify}</button>)}
                        </td>
                        <td>{String(teacher.status)}</td>
                    </tr>);
                })
            }
        </table>
    </div>);
}
export default AdminTeacherList;