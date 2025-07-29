// concept of useCallback

import React, { useCallback, useReducer, useState } from 'react';
import {createRoot} from 'react-dom/client';

function App(){
    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const [result,setResult] = useState();
    const res = useCallback(()=>{
        console.log("executes");
        setResult(addition(num1,num2));
    },[num1,num2]);
    console.log("Callback redefined");
    function addition(num1,num2){
        return parseInt(num1)+parseInt(num2);
    }
    return (<>
        <input
            placeholder='Enter First number'
            type="text"
            name="num1"
            onChange={(event)=>{
                setNum1(event.target.value)
            }}
        /><br/>
        <input
            placeholder='Enter second number'
            type="text"
            name="num2"
            onChange={(event)=>{
                setNum2(event.target.value)
            }}
        /> <br/>
        <input
            type="submit"
            onClick={res}
        />

        <h1>Result : {result}</h1>
    </>);
}
createRoot(document.getElementById("root")).render(<App/>);
