import { useEffect, useState } from 'react';
import '../style.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, resetMessage, viewUserListThunk } from '../store/userSlice.js';
import { useNavigate } from 'react-router-dom';
function ViewUser(){
    const userStoreObj = useSelector(state=>state.user);
   
    const navigate = useNavigate();
       const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(resetMessage(''));
            dispatch(viewUserListThunk());
        },[]);
    return (<div style={{padding:"30px"}}>
        {
            (userStoreObj.userObjArray.length==0) ? <h2>No Record Found</h2> : (
                <table border={1} cellSpacing={0} cellPadding={10}>
                <caption><h1>User List</h1></caption>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th colspan="2">Action</th>
                </tr>    
                {
                    userStoreObj.userObjArray.map((obj,index)=>{
                        return (<tr>
                                    <td>{index+1}</td>
                                    <td>{obj.username}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.address}</td>
                                    <td><button onClick={()=>{
                                        navigate('/updateUser',{
                                            state:{
                                                userObj : {obj,index}   
                                            }
                                        });     
                                    }}>Update</button></td>
                                    <td><button onClick={()=>{
                                        dispatch(deleteData(index));    
                                    }}>Delete</button></td>
                                </tr>);   
                    })
                }
                </table>
            )
        }
    </div>);
}
export default ViewUser;