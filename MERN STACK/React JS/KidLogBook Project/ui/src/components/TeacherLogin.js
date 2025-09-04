import '../style.css';
import login from '../assets/images/login.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { adminLoginThunk } from '../store/adminSlice.js';
import { Link, useNavigate } from 'react-router-dom';
import { teacherLoginThunk } from '../store/teacherSlice.js';
function TeacherLogin(){
    const teacherObject = useSelector(state=>state.teacher);
    const [teacherObj,setTeacherObj] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getData = (event)=>{
        const {name,value} = event.target;
        setTeacherObj({
            ...teacherObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
         dispatch(teacherLoginThunk(teacherObj));
         navigate('/teacher/teacherHome');
        event.target.reset();
    }
    return (<div>
        <div id="leftSection">
            <center>
                <h1>Teacher Panel | Login Form</h1>
                <h2>{teacherObject.message}</h2>
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
                <Link to='/teacherRegistration'>Yet Not Registered ? Register Here</Link>
            </center>
        </div>
        <div id="rightSection">
            <img src={login} id="rightImage" alt="adminLoginImage"/>
        </div>
    </div>);
}
export default TeacherLogin;