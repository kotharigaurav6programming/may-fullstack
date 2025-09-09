import '../style.css';
import login from '../assets/images/login.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setNavShow } from '../store/commonSlice.js';
import { teacherSendLinkParentThunk, resetMessage } from '../store/teacherSlice.js';

function TeacherHome(){
     const teacherObj = useSelector(state=>state.teacher);
     const [emailObj,setEmailObj] = useState({});
     const navigate = useNavigate();
     const dispatch = useDispatch();

     if(teacherObj.status==401 || teacherObj.status==500)
         navigate('/teacherLogin');

    useEffect(()=>{
        dispatch(setNavShow("teacher"));
        dispatch(resetMessage(' '));
    },[]);
    const getData = (event)=>{
        const {name,value} = event.target;
        setEmailObj({
            ...emailObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(teacherSendLinkParentThunk(emailObj));
        event.target.reset();
    }
    return (<div>
        <div id="leftSection" style={{marginTop:"-50px"}}>
            <center>
                <h2>Teacher Panel | {teacherObj.loggedInEmail}</h2>
                <h2>{teacherObj.message}</h2>
                <h3>Send Link To Parent</h3>
            </center>
            
            <form onSubmit={handleSubmit} method='post'>
                <input 
                    type="email" 
                    placeholder="Enter Email" 
                    name="email" 
                    id="email" 
                    onChange={getData}
                    required 
                /> <br/><br/>
                <button type="submit">Send Link</button>
            </form>
        </div>

        <div id="rightSection">
            <img src={login} id="rightImage" alt="adminLoginImage"/>
        </div>
    </div>);
}
export default TeacherHome;