import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [userData,setUserData] = useState([]);
  const getData = async ()=>{
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const arr = await response.json();
      setUserData(arr);
    }catch(error){
      console.log("Error : "+error);
    }
  }
  useEffect(()=>{
    getData();
  },[]);
  return (<>
    <table border={1} cellSpacing={0} cellPadding={10}>
        <tr>
          <th>S.No</th>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {
          userData.map((obj,index)=>{
            return (<tr>
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

export default App;

