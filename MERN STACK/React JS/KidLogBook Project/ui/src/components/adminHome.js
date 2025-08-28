import '../style.css';
import login from '../assets/images/login.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setNavShow } from '../store/commonSlice.js';
import { adminSendLinkTeacherThunk, resetMessage } from '../store/adminSlice.js';
function AdminHome(){
    const adminObj = useSelector(state=>state.admin);
    const [emailObj,setEmailObj] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if(adminObj.status==401 || adminObj.status==500)
        navigate('/adminLogin');

    useEffect(()=>{
        dispatch(setNavShow("admin"));
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
        dispatch(adminSendLinkTeacherThunk(emailObj));
        event.target.reset();
    }
    return (<div>
        <div id="leftSection" style={{marginTop:"-50px"}}>
            <center>
                <h2>Admin Panel | {adminObj.loggedInEmail}</h2>
                <h2>{adminObj.message}</h2>
                <h3>Send Link To Teacher</h3>
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
export default AdminHome;