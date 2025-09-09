import '../style.css';
import login from '../assets/images/login.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setNavShow } from '../store/commonSlice.js';
import { teacherSendLinkParentThunk, resetMessage } from '../store/teacherSlice.js';

function StudentHome(){
     const studentObj = useSelector(state=>state.student);
     const [emailObj,setEmailObj] = useState({});
     const navigate = useNavigate();
     const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setNavShow("student"));
        dispatch(resetMessage(' '));
    },[]);

    if(studentObj.status==401 || studentObj.status==500 || studentObj.status==undefined){
         navigate('/studentLogin');
        dispatch(setNavShow("home"));
    }
    // const getData = (event)=>{
    //     const {name,value} = event.target;
    //     setEmailObj({
    //         ...emailObj,
    //         [name]:value
    //     });
    // }
    const handleSubmit = (event)=>{
        event.preventDefault();
//        dispatch(teacherSendLinkParentThunk(emailObj));
        event.target.reset();
    }
    return (<div>
        <h1>Student Home</h1>
        {studentObj.message}
      </div>);
}
export default StudentHome;