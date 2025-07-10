// concept of useReducer

import React, { useReducer } from 'react';
import {createRoot} from 'react-dom/client';

const reducer = (state,action)=>{
    switch(action.type){
        case 'increment':
                return {...state,counter:state.counter+action.value};
        case 'decrement':
                return {...state,counter:state.counter-action.value};
        case 'reset':
                return {...state,counter:action.value};
        default:
                return state;
    }
}
const initialState = {
    counter : 0
};
function App(){
    const [count,dispatchNew] = useReducer(reducer,initialState); 
    return (<>
        <h1>Counter : {count.counter}</h1>
        <button onClick={()=>{dispatchNew({type:'increment',value:5})}}>Click To Increment</button>
        <button onClick={()=>{dispatchNew({type:'decrement',value:5})}}>Click To Decrement</button>
        <button onClick={()=>{dispatchNew({type:'reset',value:0})}}>Click To Reset</button>  
    </>);
}
createRoot(document.getElementById("root")).render(<App/>);