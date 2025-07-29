import { createSlice } from "@reduxjs/toolkit";
const initialState={
    userObj : {},
    userObjArray : [],
    message : ''
}
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
    }
});

export const {addUser,resetMessage,deleteData,updateData} = UserSlice.actions;
export default UserSlice.reducer;