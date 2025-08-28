import '../style.css';
import login from '../assets/images/login.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setNavShow } from '../store/commonSlice.js';
function AdminAssignClass(){
    const adminObj = useSelector(state=>state.admin);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // if(adminObj.status!=200)
    //     navigate('/adminLogin');
    if(adminObj.status==401 || adminObj.status==500)
        navigate('/adminLogin');


    useEffect(()=>{
        dispatch(setNavShow("admin"));
    },[]);
    return (<div>
        <div id="leftSection" style={{marginTop:"-50px"}}>
            <center>
                <h2>Admin Panel | {adminObj.loggedInEmail}</h2>
                <br/>
                <h3>Admin Assign Class</h3>
            </center>
            
 <form action="" method="post">
        <select name="classId" id="classId" required>
            <option value="">Select ClassId</option>
        </select> <br/>
        <select name="studentId" id="studentId" required>
            <option value="">Select StudentId</option>
        </select>  <br/>
        <select name="teacherId" id="teacherId" required>
            <option value="">Select TeacherId</option>
        </select>   <br/>
        <select name="pickUpDrop" id="pickUpDrop" required>
            <option value="">Select Pickup Drop Option</option>
                <option value="Self">Self</option>
                <option value="Auto">Auto</option>
                <option value="Van">Van</option>
                <option value="Bus">Bus</option>
            </select>   <br/>
        <input 
            type='text'
            placeholder="Enter School Timings" 
            name="schoolTiming" 
            id="schoolTiming"
        /> <br/>
        <select name="currentSession" id="currentSession" required>
            <option value="">Select Session</option>
        </select> <br/><br/>
        <button type="submit">Assign Class</button>
    </form>
    </div>

        <div id="rightSection">
            <img src={login} id="rightImage" alt="adminLoginImage"/>
        </div>
    </div>);
}
export default AdminAssignClass;