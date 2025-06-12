import React from 'react';
import {createRoot} from 'react-dom/client';

// Functional Component
function MainComponent(){
    // return(<div>
    //      <h1>This is my First Functional Component</h1>
    //     <h2>This is my First Functional Component</h2>
    // </div>);

    // return(<React.Fragment>
    //      <h1>This is my First Functional Component</h1>
    //     <h2>This is my First Functional Component</h2>
    // </React.Fragment>);

    return(<>
         <h1>This is my First Functional Component</h1>
        <h2>This is my First Functional Component</h2>
    </>);
}

createRoot(document.getElementById("root")).render(<MainComponent/>);

