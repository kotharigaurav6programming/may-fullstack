import '../style.css';
import login from '../assets/images/login.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { studentRegistrationThunk } from '../store/studentSlice.js';
function StudentRegistration(){
    const token = new URLSearchParams(window.location.search).get('emailToken');
    const decoded = jwtDecode(token);
    const emailReceived = decoded.email;    
    const [studentObj,setStudentObj] = useState({email:emailReceived});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getData = (event)=>{
        var {name,value} = event.target;
        if(event.target.type=="file"){
            value = event.target.files[0];
            setStudentObj({
                ...studentObj,
                [name]:value
            })
        }else{
            setStudentObj({
                ...studentObj,
                [name]:value
            });
        }
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData();
        for(var key in studentObj){
            if(studentObj[key])
                formData.append(key,studentObj[key]);
        }
        dispatch(studentRegistrationThunk(formData));
        navigate('/studentLogin');
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
                    onChange={getData}
                    required
                />
                <input 
                    type="email" 
                    placeholder="Enter Email-Id"
                    name="email" 
                    id="email" 
                    onChange={getData}
                    value={emailReceived}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Enter Password"
                    name="password" 
                    id="password" 
                    onChange={getData}
                    required
                />
                <input 
                    type="text" 
                    placeholder="Enter 10 Digits Contact Number" 
                    name="contact" 
                    id="contact"
                    onChange={getData}
                    required
                />
                <textarea 
                    placeholder="Enter Address" 
                    name="address"
                    id="address"
                    onChange={getData} 
                    required>
                </textarea> <br/>
                <span id="txt">Select Gender : </span>
                <input 
                    type="radio" 
                    name="gender" 
                    id="male" 
                    value="Male"
                    onChange={getData}
                    required 
                />
                <span>Male</span>
                <input 
                    type="radio" 
                    name="gender" 
                    id="female" 
                    value="Female"
                    onChange={getData}
                    required 
                /> 
                <span>Female</span> <br/>
                <span id="txt">Select Date Of Birth : </span>
                <input  
                    type="date" 
                    name="date" 
                    id="date"
                    onChange={getData}
                    required
                />
                <input 
                    type="text" 
                    placeholder="Enter Guardian Name"
                    name="guardianName" 
                    id="guardianName" 
                    onChange={getData}
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Enter Guardian Contact" 
                    name="guardianContact" 
                    id="guardianContact"
                    onChange={getData}
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Enter Guardian Address" 
                    name="guardianAddress" 
                    id="guardianAddress"
                    onChange={getData}
                    required 
                />
                <input 
                    type="number" 
                    placeholder="Enter Admission Year" 
                    name="admissionYear" 
                    id="admissionYear"
                    onChange={getData}
                    required 
                    min={0}
                />
                <input 
                    type="file" 
                    name="profile" 
                    id="profile"
                    onChange={getData}
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