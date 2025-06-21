import React from 'react';
import {createRoot} from 'react-dom/client';
class MyComponent extends React.Component{
    state={
        name:this.props.name
    }
    render(){
        return (<>
            <button onClick={()=>{
                this.setState({name:"Peter Parker"});
            }}>Click to Change</button>
            {console.log(this.state)}
        </>);
    }   
}
createRoot(document.getElementById("root")).render(<MyComponent name="jack"/>);