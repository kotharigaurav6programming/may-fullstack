import { useEffect, useState } from "react";

function ProfileComponent(){
    localStorage.setItem("navShow","profile");
    const [userData,setUserData] = useState([]);    
    useEffect(()=>{
        setUserData(JSON.parse(localStorage.getItem("data")));
    },[]);
    return (<>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <caption>
                <h2>User Data</h2>
            </caption>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
            </tr>
            {
                userData.map((obj)=>{
                    return (<tr>
                        <td>{obj.username}</td>
                        <td>{obj.email}</td>
                        <td>{obj.password}</td>
                        <td>{obj.address}</td>
                    </tr>);
                })
            }
        </table>
    </>);
}
export default ProfileComponent;