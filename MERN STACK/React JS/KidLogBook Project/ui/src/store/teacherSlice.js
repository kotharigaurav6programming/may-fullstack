import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { requestedTeacherURL } from "../utils.js";
import jscookie from 'js-cookie';
var teacherToken = jscookie.get("teacherToken");

const initialState={
    loggedInEmail : '',
    status : '',
    teacherObj : {},
    message:''
}
const teacherLoginThunk = createAsyncThunk('teacherSlice/teacherLoginThunk',async(teacherObj)=>{
    try{
        const result = await axios.post(requestedTeacherURL+'/teacherLogin',teacherObj);
        console.log("result on frontend side : ",result);  
        jscookie.set("teacherToken",result.data.teacherToken,{expires:1});
        jscookie.set("teacherEmail",result.data.email,{expires:1});
        return result;
    }catch(error){
        console.log("Error inside teacherLoginThunk : ",error);
    }
});

const teacherRegistrationThunk = createAsyncThunk('teacherSlice/teacherRegistrationThunk',async(teacherObj)=>{
    try{
        const result = await axios.post(requestedTeacherURL+'/teacherRegistrationData',teacherObj);
        console.log("result on frontend side : ",result);  
        return result;
    }catch(error){
        console.log("Error inside teacherRegistrationThunk : ",error);
    }
});
const teacherSendLinkParentThunk = createAsyncThunk('teacherSlice/teacherSendLinkParentThunk',async(classObj)=>{
    const result = await axios.post(requestedTeacherURL+'/studentRegistrationLink?teacherToken='+teacherToken,classObj);
    console.log("Result of teacherSendLinkParentThunk : ",result);
    return result;
});


const teacherSlice = createSlice({
    name:'teacherSlice',
    initialState,
    reducers:{
        resetMessage:(state,action)=>{
            state.message = action.payload;
        }
    },
    extraReducers:(builder)=>{
         builder
                .addCase(teacherLoginThunk.pending,(state)=>{})
                .addCase(teacherLoginThunk.fulfilled,(state,action)=>{
                    console.log("inside extra reducers : ",action);
                    state.loggedInEmail = action.payload.data.email;
                    state.status = action.payload.status;
                })
                .addCase(teacherLoginThunk.rejected,(state)=>{})
        
        builder
        .addCase(teacherRegistrationThunk.pending,(state)=>{})
        .addCase(teacherRegistrationThunk.fulfilled,(state,action)=>{
            console.log("inside extra reducers : ",action);
            state.status = action.payload.status;
            if(state.status==200){
                state.message = "Needs to wait for 24 Hours for Admin Approval";
            }
            if(state.status==500)
                state.message = "Something went wrong";
        })
        .addCase(teacherRegistrationThunk.rejected,(state)=>{})

         builder
                .addCase(teacherSendLinkParentThunk.pending,(state)=>{})
                .addCase(teacherSendLinkParentThunk.fulfilled,(state,action)=>{
                    console.log("inside extra reducers of teacherSendLinkParentThunk : ",action);
                    state.status = action.payload.status;
                    if(action.payload.status==200)
                        state.message = "Mail Sent Successfully";
                    else if(action.payload.status==502)
                        state.message = "Error while Sending Mail";
                    else
                        state.message = "Something went wrong | Please Try Again";
                })
                .addCase(teacherSendLinkParentThunk.rejected,(state)=>{})
        
    }
});

export {teacherRegistrationThunk,teacherLoginThunk,teacherSendLinkParentThunk};
export const {resetMessage} = teacherSlice.actions;
export default teacherSlice.reducer;