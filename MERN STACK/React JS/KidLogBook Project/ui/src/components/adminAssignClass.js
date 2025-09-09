import '../style.css';
import login from '../assets/images/login.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setNavShow } from '../store/commonSlice.js';
import { adminAddClassDBThunk, adminAssignClassThunk } from '../store/adminSlice.js';
function AdminAssignClass() {
    const adminObj = useSelector(state => state.admin);
    const [assignClassObj,setAssignClassObj] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // if(adminObj.status!=200)
    //     navigate('/adminLogin');
    if (adminObj.status == 401 || adminObj.status == 500)
        navigate('/adminLogin');

    const getData = (event)=>{
        const {name,value} = event.target;
        setAssignClassObj({
            ...assignClassObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
       event.preventDefault();
        console.log("received data : ",assignClassObj);
        dispatch(adminAddClassDBThunk(assignClassObj));
       event.target.reset(); 
    }

    useEffect(() => {
        dispatch(setNavShow("admin"));
        dispatch(adminAssignClassThunk());
    }, []);
    return (<div>
        <div id="leftSection" style={{ marginTop: "-50px" }}>
            <center>
                <h2>Admin Panel | {adminObj.loggedInEmail}</h2>
                <br />
                <h3>Admin Assign Class</h3>
                {adminObj.message}
            </center>

            <form method="post" onSubmit={handleSubmit}>
                <select name="classId" id="classId" onChange={getData} required>
                    <option value="">Select ClassId</option>
                    {/* {console.log(adminObj.classIdData)} */}
                    {
                        adminObj.classIdData.map((obj, index) => {
                            return (<option value={obj.class_name+" "+obj.section_name}>{obj.class_name+" "+obj.section_name}</option>);
                        })
                    }
                </select> <br />
                <select name="studentId" id="studentId" onChange={getData} required>
                    <option value="">Select StudentId</option>
                    {
                        adminObj.studentIdData.map((obj, index) => {
                            return (<option value={obj.name}>{obj.name}</option>);
                        })
                    }

                </select>  <br />
                <select name="teacherId" id="teacherId" onChange={getData} required>
                    <option value="">Select TeacherId</option>
                    {
                        adminObj.teacherIdData.map((obj, index) => {
                            return (<option value={obj.name}>{obj.name}</option>);
                        })
                    }

                </select>   <br />
                <select name="pickUpDrop" id="pickUpDrop" onChange={getData} required>
                    <option value="">Select Pickup Drop Option</option>
                    <option value="Self">Self</option>
                    <option value="Auto">Auto</option>
                    <option value="Van">Van</option>
                    <option value="Bus">Bus</option>
                </select>   <br />
                <input
                    type='text'
                    placeholder="Enter School Timings"
                    name="schoolTiming"
                    id="schoolTiming"
                    onChange={getData}
                /> <br />
                <select name="currentSession" id="currentSession" onChange={getData} required>
                    <option value="">Select Session</option>
                    {
                        adminObj.sessionIdData.map((obj, index) => {
                            return (<option value={obj.session}>{obj.session}</option>);
                        })
                    }

                </select> <br /><br />
                <button type="submit">Assign Class</button>
            </form>
        </div>

        <div id="rightSection">
            <img src={login} id="rightImage" alt="adminLoginImage" />
        </div>
    </div>);
}
export default AdminAssignClass;