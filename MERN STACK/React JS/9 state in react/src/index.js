import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import Display from './Display.js';
function MyComponent(){
    const [userObj,setUserObj] = useState({});
    const [userData,setUserData] = useState([]);
    const [index,setIndex] = useState(-1);
    const getData = (event)=>{
                const {name,value} = event.target;
                setUserObj({
                    ...userObj,
                    [name]:value
                });
            }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(index==-1){
            setUserData([
                ...userData,
                userObj
            ]);
        }else{
            userData.splice(index,1,userObj);
            setUserData([...userData]);
            setIndex(-1);
        }
        event.target.reset();
        setUserObj({
            username:'',
            email:'',
            password:'',
            address:''
        })
    }
    const updateData = (objUser)=>{
        setUserObj(objUser.obj);
        setIndex(objUser.index);
    }
    const deleteData = (index)=>{
        userData.splice(index,1);
        setUserData([...userData]);
    }
    return (<>
        <h1>Fill Details</h1>
        <form onSubmit={handleSubmit}>
        <input
            type='text'
            placeholder='Enter Username'
            required 
            id='username'
            name='username'
            value={userObj.username ?? ''}
            onChange={getData}
        />
        <input
            type='email'
            placeholder='Enter Email'
            required 
            id='email'
            name='email'
            value={userObj.email ?? ''}
            onChange={getData}
        />
        <input
            type='password'
            placeholder='Enter Password'
            required 
            id='password'
            name='password'
            value={userObj.password ?? ''}
            onChange={getData}
        />
        <input
            type='text'
            placeholder='Enter Address'
            required 
            id='address'
            name='address'
            value={userObj.address ?? ''}
            onChange={getData}
        />
        <input
           type='submit'
           value='Submit'
        />
        <input 
            type='reset'
            value='reset'
        />
        </form>
        <Display userData={userData} update={updateData}  delete={deleteData}/>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);