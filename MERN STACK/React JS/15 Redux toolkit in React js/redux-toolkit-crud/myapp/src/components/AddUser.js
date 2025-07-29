import { useState } from 'react';
import '../style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/userSlice.js';
function AddUser(){
    const userStoreObj = useSelector(state=>state.user);
    const [userObj,setUserObj] = useState({});
    const dispatch = useDispatch();
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
            dispatch(addUser(userObj));
        event.target.reset();
    }
    return (<div style={{padding:"30px"}}>
        <h1>Add User</h1>
        {userStoreObj.message}
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter Username'
                name='username'
                id='username'
                onChange={getData}
                required
            /> <br/>
            <input
                type='email'
                placeholder='Enter Email'
                name='email'
                id='email'
                onChange={getData}
                required
            /> <br/>
            <input
                type='password'
                placeholder='Enter Password'
                name='password'
                id='password'
                onChange={getData}
                required
            /> <br/>
            <input
                type='text'
                placeholder='Enter Address'
                name='address'
                id='address'
                onChange={getData}
                required
            /> <br/>
            <input
                type='submit'
                value="Add User"
            /> <br/>
            <input
                type='reset'
                value="Reset"
            /> <br/>
        </form>
    </div>);
}
export default AddUser;