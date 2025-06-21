import React from 'react';
import {createRoot} from 'react-dom/client';
// Mc-d frenchiese with specific item to sell out(needs permission from mc-d owner) likewise React.Component initially sets props to its child class
class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:this.props.name
        }
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