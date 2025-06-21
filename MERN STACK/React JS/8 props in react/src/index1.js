import React from 'react';
import {createRoot} from 'react-dom/client';

function MyFunction(props){
    return (<>
        {console.log(props)}
    </>);
}

createRoot(document.getElementById("root")).render(<MyFunction name="Andrew Anderson"/>);