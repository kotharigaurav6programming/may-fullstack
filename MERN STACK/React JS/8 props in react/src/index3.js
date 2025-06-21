import React from 'react';
import {createRoot} from 'react-dom/client';

function MyFunction({name="noname",age=0,salary=0}){
    return (<>
        <h2>Functional Component</h2>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Salary : {salary}</p>
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
        <MyFunction salary="89090"/>
        <MyClass name="Peter Parker" age="67"/>
    </>);
}
MyClass.defaultProps={
    name:"noname",
    age : 0,
    salary : 0
}
createRoot(document.getElementById("root")).render(<FunctionalComponent/>);