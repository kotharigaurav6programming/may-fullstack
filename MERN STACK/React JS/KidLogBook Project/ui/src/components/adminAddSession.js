import '../style.css';
import login from '../assets/images/login.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setNavShow } from '../store/commonSlice.js';
import { adminAddSessionThunk, resetMessage } from '../store/adminSlice.js';
function AdminAddSession(){
    const adminObj = useSelector(state=>state.admin);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if(adminObj.status==401 || adminObj.status==500)
        navigate('/adminLogin');

    useEffect(()=>{
        dispatch(setNavShow("admin"));
        dispatch(resetMessage(' '));
    },[]);
    const [sessionObj,setSessionObj] = useState({});
    const getData = (event)=>{
        const {name,value} = event.target;
        setSessionObj({
            ...sessionObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(adminAddSessionThunk(sessionObj));
        navigate('/adminAddSession');
        event.target.reset();
    }
    return (<div>
        <div id="leftSection" style={{marginTop:"-50px"}}>
            <center>
                <h2>Admin Panel | {adminObj.loggedInEmail}</h2>
                <h2>{adminObj.message}</h2>
                <br/>
                <h3>Admin Add Session</h3>
            </center>
              <form method="post" onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        name="session" 
                        id="session"
                        placeholder="Enter Session (YYYY-YYYY)" 
                        onChange={getData}
                        required
                    /> <br/><br/>      
                    <button type="submit">Add Session</button>
                </form>
        </div>

        <div id="rightSection">
            <img src={login} id="rightImage" alt="adminLoginImage"/>
        </div>
    </div>);
}
export default AdminAddSession;