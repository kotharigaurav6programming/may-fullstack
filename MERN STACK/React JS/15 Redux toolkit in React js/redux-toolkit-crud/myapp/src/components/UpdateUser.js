import { useState } from 'react';
import '../style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateData } from '../store/userSlice.js';
function UpdateUser(){
    const location = useLocation();
    const [userObj,setUserObj] = useState(location.state.userObj.obj);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [updateIndex,setUpdateIndex] = useState(location.state.userObj.obj.index);
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const index = 'index';   
        setUserObj({
            ...userObj,
            [index]:updateIndex
        });
           dispatch(updateData(userObj));
           
          event.target.reset();
          navigate('/viewUser');          
    }
    return (<div style={{padding:"30px"}}>
        <h1>Update User</h1>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter Username'
                name='username'
                id='username'
                value={userObj?.username}
                onChange={getData}
                required
            /> <br/>
            <input
                type='email'
                placeholder='Enter Email'
                name='email'
                id='email'
                value={userObj?.email}
                onChange={getData}
                required
            /> <br/>
            <input
                type='password'
                placeholder='Enter Password'
                name='password'
                id='password'
                value={userObj?.password}
                onChange={getData}
                required
            /> <br/>
            <input
                type='text'
                placeholder='Enter Address'
                name='address'
                id='address'
                value={userObj?.address}
                onChange={getData}
                required
            /> <br/>
            <input
                type='submit'
                value="Update User"
            /> <br/>
            <input
                type='reset'
                value="Reset"
            /> <br/>
        </form>
    </div>);
}
export default UpdateUser;