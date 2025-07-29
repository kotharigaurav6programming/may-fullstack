import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    counter:0,
    counterTitle : "Counter",
    tagLine : 'This is Tag Line'
}
const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        increment : (state)=>{
            state.counter+=1;
        },
        decrement : (state)=>{
            state.counter-=1;
        },
        reset : (state)=>{
            state.counter=0;
        },
        setTagLine : (state,action)=>{
            console.log("action : ",action);
            state.tagLine = action.payload;
        }        
    }
});

export const {increment,decrement,reset,setTagLine} = userSlice.actions;
export default userSlice.reducer;
