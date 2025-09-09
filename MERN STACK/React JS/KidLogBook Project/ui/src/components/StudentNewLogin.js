import '../style.css';
import login from '../assets/images/login.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { studentLoginThunk } from '../store/studentSlice.js';
import { Link, useNavigate } from 'react-router-dom';

function StudentLogin(){
    const studObj = useSelector(state=>state.student);
    const [studentObj,setStudentObj] = useState({});
    
    if(studObj.status==401 || studObj.status==500)
        navigate('/studentLogin');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getData = (event)=>{
        const {name,value} = event.target;
        setStudentObj({
            ...studentObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
         dispatch(studentLoginThunk(studentObj));
         navigate('/student/studentHome');
        event.target.reset();
    }
    return (<div>
        <div id="leftSection">
            <center>
                <h1>Student Panel | Login Form</h1>
                <h2>{studObj.message}</h2>
            </center>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='Enter Email'
                    name='email'
                    id='email'
                    required
                    onChange={getData}
                /> <br/>
                <input
                    type='password'
                    placeholder='Enter Password'
                    name='password'
                    id='password'
                    required
                    onChange={getData}
                /> <br/>
                <input
                    type="submit"
                    value="Login"
                /> <br/>
                <input
                    type="reset"
                    value="Reset"
                /> <br/>                
            </form> <br/>
            <center>
                <Link to='/studentRegistration'>Yet Not Registered ? Register Here</Link>
            </center>
        </div>
        <div id="rightSection">
            <img src={login} id="rightImage" alt="adminLoginImage"/>
        </div>
    </div>);
}
export default StudentLogin;