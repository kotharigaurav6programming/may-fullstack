import '../style.css';
import login from '../assets/images/login.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setNavShow } from '../store/commonSlice.js';
import { adminAddClassThunk, resetMessage } from '../store/adminSlice.js';
function AdminAddClass(){
    const adminObj = useSelector(state=>state.admin);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // if(adminObj.status!=200)
    //     navigate('/adminLogin');
    if(adminObj.status==401 || adminObj.status==500)
        navigate('/adminLogin');

    useEffect(()=>{
        dispatch(setNavShow("admin"));
        dispatch(resetMessage(' '));
    },[]);
    const [classObj,setClassObj] = useState({});
    const getData = (event)=>{
        const {name,value} = event.target;
        setClassObj({
            ...classObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(adminAddClassThunk(classObj));
        navigate('/adminAddClass');
        event.target.reset();
    }
    return (<div>
        <div id="leftSection" style={{marginTop:"-50px"}}>
            <center>
                <h2>Admin Panel | {adminObj.loggedInEmail}</h2>
                <h2>{adminObj.message}</h2>
                <br/>
                <h3>Admin Add Class</h3>
            </center>
            <form method="post" onSubmit={handleSubmit}>
                <select name="class_name" id="class_name" required onChange={getData}>
                    <option value="">Select Class</option>
                    <option value="Nursery">Nursery</option>
                    <option value="KG-1">KG-1</option>
                    <option value="KG-2">KG-2</option>
                </select> <br/>
                <select name="section_name" id="section_name" onChange={getData} required>
                    <option value="">Select Section</option>
                    <option value="Section A">Section A</option>
                    <option value="Section B">Section B</option>
                    <option value="Section C">Section C</option>
                    <option value="Section D">Section D</option>
                </select> <br/><br/>      
                <button type="submit">Add Class</button>        
            </form> 
        </div>

        <div id="rightSection">
            <img src={login} id="rightImage" alt="adminLoginImage"/>
        </div>
    </div>);
}
export default AdminAddClass;