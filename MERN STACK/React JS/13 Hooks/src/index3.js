// concept of useReducer

import React, { useReducer } from 'react';
import {createRoot} from 'react-dom/client';

const reducer = (state,action)=>{
    switch(action){
        case 'increment':
                return state+1;
        case 'decrement':
                return state-1;
        case 'reset':
                return 0;
        default:
                return state;
    }
}
const initialState = 0;
function App(){
    const [count,dispatchNew] = useReducer(reducer,initialState); 
    return (<>
        <h1>Counter : {count}</h1>
        <button onClick={()=>{dispatchNew('increment')}}>Click To Increment</button>
        <button onClick={()=>{dispatchNew('decrement')}}>Click To Decrement</button>
        <button onClick={()=>{dispatchNew('reset')}}>Click To Reset</button>  
    </>);
}
createRoot(document.getElementById("root")).render(<App/>);