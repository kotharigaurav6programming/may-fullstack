import React from 'react';
import {createRoot} from 'react-dom/client';

class MyComponent extends React.Component{
    state={
        name:"Andrew Anderson"
    }
    stateDemo = {
        name:"Peter Parker"
    }
    render(){
        return (<>
            {console.log(this.stateDemo)}
        </>);
    }   
}
createRoot(document.getElementById("root")).render(<MyComponent/>);