import React from 'react';
import {createRoot} from 'react-dom/client';

function MyFunction(props){
    return (<>
        {console.log(props)}
        {console.log(props.name)}
        <h2>Functional Component</h2>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Salary : {props.salary}</p>
    </>);
}
class MyClass extends React.Component{
    render(){
        return (<>
            {console.log(this.props)}
            {console.log(this.props.name)}
            <h2>Class Component</h2>
            <p>Name : {this.props.name}</p>
            <p>Age : {this.props.age}</p>
            <p>Salary : {this.props.salary}</p>
        </>);
    }
}
function FunctionalComponent(){
    return (<>
        <MyFunction name="Andrew Anderson" age={23} salary="89090"/>
        <MyClass name="Peter Parker" age="67" salary={34567}/>
    </>);
}
createRoot(document.getElementById("root")).render(<FunctionalComponent/>);