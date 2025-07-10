// concept of prop drilling

import React from 'react';
import {createRoot} from 'react-dom/client';

function App(){
    return (<>
        <h2>This is main component</h2>
        <A fname={"Andrew"} lname={"Anderson"}/>
    </>);
}
function A(props){
    return(<>
        <B fname={props.fname} lname={props.lname}/>
    </>);
}

function B(props){
    return(<>
        <C fname={props.fname} lname={props.lname}/>
    </>);
}
function C(props){
    return(<>
        <h4>First Name : {props.fname}</h4>
        <h4>Last Name : {props.lname}</h4>
    </>);
}

createRoot(document.getElementById("root")).render(<App/>);