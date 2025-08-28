import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { requestedAdminURL } from "../utils.js";
import jscookie from 'js-cookie';
var adminToken = jscookie.get("adminToken");
const initialState={
    loggedInEmail : '',
    status : '',
    adminObj : {},
    message:''
}
const adminLoginThunk = createAsyncThunk('adminSlice/adminLoginThunk',async(adminObj)=>{
    try{
        const result = await axios.post(requestedAdminURL+'/adminLogin',adminObj);
        console.log("result on frontend side : ",result);  
        jscookie.set("adminToken",result.data.adminToken,{expires:1});
        jscookie.set("adminEmail",result.data.email,{expires:1});
        return result;
    }catch(error){
        console.log("Error inside adminLoginThunk : ",error);
    }
});
const adminAddSessionThunk = createAsyncThunk('adminSlice/adminAddSessionThunk',async(sessionObj)=>{
    const result = await axios.post(requestedAdminURL+'/addSession?adminToken='+adminToken,sessionObj);
    console.log("Result of session : ",result);
    return result;
});
const adminAddClassThunk = createAsyncThunk('adminSlice/adminAddClassThunk',async(classObj)=>{
    const result = await axios.post(requestedAdminURL+'/addClass?adminToken='+adminToken,classObj);
    console.log("Result of class : ",result);
    return result;
});

const adminSendLinkTeacherThunk = createAsyncThunk('adminSlice/adminSendLinkTeacherThunk',async(classObj)=>{
    const result = await axios.post(requestedAdminURL+'/teacherRegistrationLink?adminToken='+adminToken,classObj);
    console.log("Result of adminSendLinkTeacherThunk : ",result);
    return result;
});

const adminSlice = createSlice({
    name:'adminSlice',
    initialState,
    reducers:{
        resetMessage:(state,action)=>{
            state.message = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(adminLoginThunk.pending,(state)=>{})
        .addCase(adminLoginThunk.fulfilled,(state,action)=>{
            console.log("inside extra reducers : ",action);
            state.loggedInEmail = action.payload.data.email;
            state.status = action.payload.status;
        })
        .addCase(adminLoginThunk.rejected,(state)=>{})

        builder
        .addCase(adminAddSessionThunk.pending,(state)=>{})
        .addCase(adminAddSessionThunk.fulfilled,(state,action)=>{
            console.log("inside extra reducers of session : ",action);
            state.status = action.payload.status;
            if(action.payload.status==201)
                state.message = "Session Added Successfully";
            else 
                state.message = "Error while Adding session";
        })
        .addCase(adminAddSessionThunk.rejected,(state)=>{})

        builder
        .addCase(adminAddClassThunk.pending,(state)=>{})
        .addCase(adminAddClassThunk.fulfilled,(state,action)=>{
            console.log("inside extra reducers of class : ",action);
            state.status = action.payload.status;
            if(action.payload.status==201)
                state.message = "Class Added Successfully";
            else if(action.payload.status==204)
                state.message = "Class Already exist";
            else
                state.message = "Error while Adding class";
        })
        .addCase(adminAddClassThunk.rejected,(state)=>{})

         builder
        .addCase(adminSendLinkTeacherThunk.pending,(state)=>{})
        .addCase(adminSendLinkTeacherThunk.fulfilled,(state,action)=>{
            console.log("inside extra reducers of adminSendLinkTeacherThunk : ",action);
            state.status = action.payload.status;
            if(action.payload.status==200)
                state.message = "Mail Sent Successfully";
            else if(action.payload.status==502)
                state.message = "Error while Sending Mail";
            else
                state.message = "Something went wrong | Please Try Again";
        })
        .addCase(adminSendLinkTeacherThunk.rejected,(state)=>{})

    }
});

export {adminLoginThunk,adminAddSessionThunk,adminAddClassThunk,adminSendLinkTeacherThunk};
export const {resetMessage} = adminSlice.actions;
export default adminSlice.reducer;