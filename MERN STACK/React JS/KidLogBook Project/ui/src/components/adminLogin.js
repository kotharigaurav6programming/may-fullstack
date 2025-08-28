import '../style.css';
import login from '../assets/images/login.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adminLoginThunk } from '../store/adminSlice.js';
import { useNavigate } from 'react-router-dom';
function AdminLogin(){
    const [adminObj,setAdminObj] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getData = (event)=>{
        const {name,value} = event.target;
        setAdminObj({
            ...adminObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(adminLoginThunk(adminObj));
        navigate('/admin/adminHome');
        event.target.reset();
    }
    return (<div>
        <div id="leftSection">
            <center>
                <h1>Admin Panel | Login Form</h1>
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
            </form>
        </div>
        <div id="rightSection">
            <img src={login} id="rightImage" alt="adminLoginImage"/>
        </div>
    </div>);
}
export default AdminLogin;