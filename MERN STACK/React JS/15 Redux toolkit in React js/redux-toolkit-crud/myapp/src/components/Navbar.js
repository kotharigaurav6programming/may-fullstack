import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Navbar(){
    const [menuItem,setMenuItem] = useState();
    useEffect(()=>{
        var timer = setInterval(()=>{
            setMenuItem(<div style={{backgroundColor:"black",padding:"10px",fontSize:"20px"}}>
                <Link to='/' style={{color:"white",textDecoration:"none",marginLeft:"30px"}}>Home</Link>
                <Link to='/addUser' style={{color:"white",textDecoration:"none",marginLeft:"30px"}}>Add User</Link>
                <Link to='/viewUser' style={{color:"white",textDecoration:"none",marginLeft:"30px"}}>View Users</Link>
            </div>);
        },500);
        return ()=> clearInterval(timer);
    });
    return (<>
        {menuItem}
    </>);
}
export default Navbar;