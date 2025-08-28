import '../style.css';
import login from '../assets/images/login.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
function TeacherRegistration(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getData = (event)=>{
        const {name,value} = event.target;
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        event.target.reset();
    }
    return (<div>
        <div id="leftSection" style={{marginTop:"-50px"}}>
            <center>
                <h2>Teacher Panel | Registration Form</h2>
            </center>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter Name"
                    name="name" 
                    id="name" 
                    required
                />
                <input 
                    type="email" 
                    placeholder="Enter Email-Id"
                    name="email" 
                    id="email" 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Enter Password"
                    name="password" 
                    id="password" 
                    required
                />
                <input 
                    type="text" 
                    placeholder="Enter 10 Digits Contact Number" 
                    name="contact" 
                    id="contact"
                    required
                />
                <select name="qualification" id="qualification" required>
                    <option value="">Select Qualification</option>
                    <option value="BBA">BBA</option>
                    <option value="BCA">BCA</option>
                    <option value="BSC">BSC</option>
                    <option value="BCOM">BCOM</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="MSC">MSC</option>
                    <option value="MCOM">MCOM</option>
                    <option value="BTech">BTech</option>
                    <option value="MTech">MTech</option>
                </select>
                <select name="experience" id="experience" required>
                    <option value="">Select Experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="6+ Months Experienced">6+ Months Experienced</option>
                    <option value="1+ Year Experience">1+ Year Experience</option>
                    <option value="3+ Year Experience">3+ Year Experience</option>
                    <option value="5+ Year Experience">5+ Year Experience</option>
                </select> <br/>
                <span id="txt">Select Date Of Birth : </span>
                <input 
                    type="date" 
                    name="date" 
                    id="date"
                    required
                /><br/>
                <span id='txt'>Select Gender : </span>
                <input 
                    type="radio" 
                    name="gender" 
                    id="male" 
                    value="Male"
                    required
                />
                <span>Male</span>
                <input 
                    type="radio" 
                    name="gender" 
                    id="female" 
                    value="Female"
                    required
                /> 
                <span>Female</span>
                <textarea 
                    placeholder="Enter Address" 
                    name="address"
                    id="address" 
                    required>
                </textarea>
                <input
                    type="submit"
                    value="Registration"
                /> <br/>
                <input
                    type="reset"
                    value="Reset"
                /> <br/>                
            </form> <br/>
            <center>
                <Link to='/teacherLogin'>Already Registered ? Login Here</Link>
            </center>
        </div>
        <div id="rightSection">
            <img src={login} id="rightImage" alt="adminLoginImage"/>
        </div>
    </div>);
}
export default TeacherRegistration;