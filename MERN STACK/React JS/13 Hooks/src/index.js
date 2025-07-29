// concept of usememo and memo

import React, {memo, useMemo, useState } from 'react';
import {createRoot} from 'react-dom/client';

const Memoized = memo((props)=>{
    {console.log("Memoized component called");}
    return (<>
        Hello {props.fname} your surname is {props.lname}
    </>);
}); 

function UnMemoized(props){
    {console.log("Unmemoized component called");}
    return (<>
        Hello {props.fname} your surname is {props.lname}
    </>);
}
function App(){
    const [fname,setFname] = useState("Andrew Andy");
    const [lname,setLname] = useState("Anderson");
    const [count,setCount] = useState(0);
    const memoizedComponent = useMemo(()=> <Memoized fname={fname} lname={lname}/>,[fname,lname]);
    return (<>
        <h1>Counter : {count}</h1>
        <button onClick={()=>{setCount(count+1);setFname("andy")}}>Click to Count</button>
        <h1>Memoized component</h1>
        {memoizedComponent}
        <h1>UnMemoized component</h1>
        <UnMemoized fname={fname} lname={lname}/>
    </>);
}
createRoot(document.getElementById("root")).render(<App/>);