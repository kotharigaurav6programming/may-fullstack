import React from 'react';
import {createRoot} from 'react-dom/client';

// Functional Component
/*
function MyFunctionalComponent(){
    return(<h1>
        This is my First Functional Component
    </h1>);
}

createRoot(document.getElementById("root")).render(<MyFunctionalComponent/>);
*/

// Class Component
class MyClassComponent extends React.Component{
    render(){
        return(<h1>
            This is my First Class Component
        </h1>);
    };
}

createRoot(document.getElementById("root")).render(<MyClassComponent/>);
