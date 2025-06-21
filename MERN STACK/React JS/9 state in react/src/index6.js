import React from 'react';
import {createRoot} from 'react-dom/client';
class MyComponent extends React.Component{
    state={
        name:'',
        age:'',
        userObj:{},
        status:false
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({userObj : {name : this.state.name,age : this.state.age}});
        this.state.status=true;
        event.target.reset();
    }
    render(){
        return (<>
        <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                placeholder='Enter Username'
                onChange={
                    (event)=>{
                        this.setState({name:event.target.value});
                    }
                }    
            /><br/>
            <input
                type="text"
                placeholder='Enter Age'
                onChange={
                    (event)=>{
                        this.setState({age:event.target.value});
                    }
                }    
            /> <br/>
            <input
                type="submit"
                value="Submit"    
            />
        </form>
        {(this.state.name!='' && this.state.status)?`Name : ${this.state.name}` : ''}
        {(this.state.age!='' && this.state.status)?`Age : ${this.state.age}` : ''}
        
        </>);
    }   
}
createRoot(document.getElementById("root")).render(<MyComponent/>);