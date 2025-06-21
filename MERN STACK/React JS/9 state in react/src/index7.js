import React from 'react';
import {createRoot} from 'react-dom/client';
import jsonData from './db.json';
function MyComponent(){
    return (<>
        <h1>Student Records</h1>
        <table border='1' cellSpacing='0' cellPadding='10'>
            <tr>
                <th>S.No</th>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        {
            jsonData.map((obj,index)=>{
                return(<tr>
                    <td>{index+1}</td>
                    <td>{obj.userId}</td>
                    <td>{obj.id}</td>
                    <td>{obj.title}</td>
                    <td>{obj.body}</td>
                </tr>);
            })
        }
        </table>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);