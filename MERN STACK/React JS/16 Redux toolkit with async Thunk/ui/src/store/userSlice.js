import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { requestedURL } from "../utils.js";
const initialState={
    userObj : {},
    userObjArray : [],
    message : ''
}

const viewUserListThunk = createAsyncThunk('userSlice/viewUserListThunk',async()=>{
    try{
        const result = await axios.get(requestedURL+'/viewUser'); 
        return result;
    }catch(error){
        console.log("Error in viewUserListThunk : ",error);
        return error;
    }
});
const UserSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers:{
        addUser : (state,action)=>{
           state.userObjArray = [...state.userObjArray,action.payload]; 
           state.message = "User Data Added Successfully";
        },
        deleteData : (state,action)=>{
           state.userObjArray.splice(action.payload,1);
           state.userObjArray = [...state.userObjArray]; 
        },
        resetMessage : (state,action)=>{
            state.message = action.payload;
        },
        updateData : (state,action)=>{
            state.userObjArray.splice(action.payload.index,1,action.payload);
            state.userObjArray = [...state.userObjArray];          
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(viewUserListThunk.pending,(state)=>{})
            .addCase(viewUserListThunk.fulfilled,(state,action)=>{
                console.log("---> ",action.payload.data.result);
                state.userObjArray = action.payload.data.result;                
            })
            .addCase(viewUserListThunk.rejected,(state)=>{})
    }
});

export {viewUserListThunk};
export const {addUser,resetMessage,deleteData,updateData} = UserSlice.actions;
export default UserSlice.reducer;