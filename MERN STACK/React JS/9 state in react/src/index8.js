import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
function MyComponent(){
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [address,setAddress] = useState('');
    const [userData,setUserData] = useState([]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        var obj = {
            username,
            email,
            password,
            address
        }
        setUserData([
            ...userData,
            obj
        ]);
        event.target.reset();
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
            onChange={(event)=>{
                setUsername(event.target.value);
            }}
        />
        <input
            type='email'
            placeholder='Enter Email'
            required 
            id='email'
            name='email'
            onChange={(event)=>{
                setEmail(event.target.value);
            }}
        />
        <input
            type='password'
            placeholder='Enter Password'
            required 
            id='password'
            name='password'
            onChange={(event)=>{
                setPassword(event.target.value);
            }}
        />
        <input
            type='text'
            placeholder='Enter Address'
            required 
            id='address'
            name='address'
            onChange={(event)=>{
                setAddress(event.target.value);
            }}
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
        <h1>Student Records</h1>
        <table border='1' cellSpacing='0' cellPadding='10'>
            <tr>
                <th>S.No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
            </tr>
        {
            userData.map((obj,index)=>{
                return(<tr>
                    <td>{index+1}</td>
                    <td>{obj.username}</td>
                    <td>{obj.email}</td>
                    <td>{obj.password}</td>
                    <td>{obj.address}</td>
                </tr>);
            })
        }
        </table>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);