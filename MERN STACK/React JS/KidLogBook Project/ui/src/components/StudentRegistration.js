import '../style.css';
import login from '../assets/images/login.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
function StudentRegistration(){
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
        <div id="leftSection" style={{marginTop:"-60px"}}> 
            <center>
                <h2>Student Panel | Registration Form</h2>
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
                <textarea 
                    placeholder="Enter Address" 
                    name="address"
                    id="address" 
                    required>
                </textarea> <br/>
                <span id="txt">Select Gender : </span>
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
                <span>Female</span> <br/>
                <span id="txt">Select Date Of Birth : </span>
                <input  
                    type="date" 
                    name="date" 
                    id="date"
                    required
                />
                <input 
                    type="text" 
                    placeholder="Enter Guardian Name"
                    name="guardianName" 
                    id="guardianName" 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Enter Guardian Contact" 
                    name="guardianContact" 
                    id="guardianContact"
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Enter Guardian Address" 
                    name="guardianAddress" 
                    id="guardianAddress"
                    required 
                />
                <input 
                    type="number" 
                    placeholder="Enter Admission Year" 
                    name="admissionYear" 
                    id="admissionYear"
                    required 
                    min={0}
                />
                <input 
                    type="file" 
                    name="profile" 
                    id="profile"
                    required/>
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
                <Link to='/studentLogin'>Already Registered ? Login Here</Link>
            </center>
        </div>
        <div id="rightSection">
            <img src={login} id="rightImage" alt="adminLoginImage"/>
        </div>
    </div>);
}
export default StudentRegistration;