import React from 'react';
import {createRoot} from 'react-dom/client';

function MyFunction(props){
    return (<>
        <h2>Functional Component</h2>
        <p>Name : {props.obj.name}</p>
        <p>Price : {props.obj.price}</p>
        <p>Author : {props.obj.author}</p>
    </>);
}
class MyClass extends React.Component{
    render(){
        return (<>
            <h2>Class Component</h2>
            <p>Name : {this.props.obj.name}</p>
            <p>Price : {this.props.obj.price}</p>
            <p>Author : {this.props.obj.author}</p>
    </>);
    };
}
var classObj = {name:"Programming in Java",price:898.89, author:"James Gosling"};
function FunctionalComponent(){
    var funObj = {name:"Programming in C", price:567.89, author:"Dennis Ritchie"};
    return (<>
        <MyFunction obj={funObj} />
        <MyClass  obj={classObj} />
    </>);
}
createRoot(document.getElementById("root")).render(<FunctionalComponent/>);