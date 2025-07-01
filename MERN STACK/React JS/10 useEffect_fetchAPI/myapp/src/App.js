import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';

function App(){
    const [userObj,setUserObj] = useState({});
    const [userData,setUserData] = useState([]);
    const [status,setStatus] = useState(false);
    console.log("----> ",status);
    
    const getData = (event)=>{
                const {name,value} = event.target;
                setUserObj({
                    ...userObj,
                    [name]:value
                });
            }
    const printData = async ()=>{
        try{
          const response = await fetch('http://localhost:3000/profile');
          const arr = await response.json();
          setUserData(arr);
        }catch(error){
          console.log("Error : "+error);
        }
      }
      useEffect(()=>{
        printData();
      },[status]);
      
    const handleSubmit = async (event)=>{
        event.preventDefault();
        await fetch("http://localhost:3000/profile",{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(userObj)
        });
        setStatus(!status);
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
            onChange={getData}
        />
        <input
            type='email'
            placeholder='Enter Email'
            required 
            id='email'
            name='email'
            onChange={getData}
        />
        <input
            type='password'
            placeholder='Enter Password'
            required 
            id='password'
            name='password'
            onChange={getData}
        />
        <input
            type='text'
            placeholder='Enter Address'
            required 
            id='address'
            name='address'
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

export default App;