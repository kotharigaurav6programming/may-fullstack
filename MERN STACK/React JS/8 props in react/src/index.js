import React from 'react';
import {createRoot} from 'react-dom/client';

function MyFunction(props){
    return (<>
        <h2>Functional Component</h2>
        <table border={1} cellPadding={30} cellspacing={0}>
        <tr>
            <th>S.No</th>
            <th>BookName</th>
            <th>Price</th>
            <th>Author</th>
        </tr>
        {                
            props.obj.map((obj,index)=>{
                return (<>
                    <tr>
                        <td>{index+1}</td>
                        <td>{obj.name}</td>
                        <td>{obj.price}</td>
                        <td>{obj.author}</td>
                    </tr>
                </>);
            })
        }
        </table>
    </>);
}
class MyClass extends React.Component{
    render(){
        return (<>
        <h2>Class Component</h2>
        <table border={1} cellPadding={30} cellspacing={0}>
        <tr>
            <th>S.No</th>
            <th>BookName</th>
            <th>Price</th>
            <th>Author</th>
        </tr>
        {                
            this.props.obj.map((obj,index)=>{
                return (<>
                    <tr>
                        <td>{index+1}</td>
                        <td>{obj.name}</td>
                        <td>{obj.price}</td>
                        <td>{obj.author}</td>
                    </tr>
                </>);
            })
        }
        </table>
    </>);
    };
}
var obj = [{
        name:"Programming in Java",
        price:898.89, 
        author:"James Gosling"
    },{
        name:"Programming in C", 
        price:567.89, 
        author:"Dennis Ritchie"
    }];

function FunctionalComponent(){
    return (<>
        <MyFunction obj={obj} />
        <MyClass  obj={obj} />
    </>);
}
createRoot(document.getElementById("root")).render(<FunctionalComponent/>);