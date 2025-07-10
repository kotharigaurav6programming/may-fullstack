// concept of context api (createContext and useContext)

import React, { createContext, useContext, useState } from 'react';
import {createRoot} from 'react-dom/client';
var context = createContext(null);

function App(){
    const [fname,setFname] = useState("Andrew..");
    const [lname,setLname] = useState("Anderson..");
    
    return (<context.Provider value={{fname,lname}}>
        <h2>This is main component</h2>
        <A/>
    </context.Provider>);
}
function A(){
    return(<>
        <B/>
    </>);
}

function B(){
    return(<>
        <C/>
    </>);
}
function C(props){
    const {fname,lname} = useContext(context);
    return(<>
        <h4>First Name : {fname}</h4>
        <h4>Last Name : {lname}</h4>
    </>);
}

createRoot(document.getElementById("root")).render(<App/>);

