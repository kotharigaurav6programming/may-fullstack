// import { Link } from "react-router-dom";
// function Navbar(){
//     return (<div style={{backgroundColor:"black",padding:"15px",height:"20px"}}>
//         <Link style={{color:"white",textDecoration:"none"}} to="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
//         <Link style={{color:"white",textDecoration:"none"}} to="/about">About</Link> &nbsp;&nbsp;&nbsp;&nbsp;
//         <Link style={{color:"white",textDecoration:"none"}} to="/login">Login</Link> &nbsp;&nbsp;&nbsp;&nbsp;
//         <Link style={{color:"white",textDecoration:"none"}} to="/register">Register</Link> &nbsp;&nbsp;&nbsp;&nbsp;
//     </div>);
// }
// export default Navbar;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    const [menuItem, setMenuItem] = useState();
    useEffect(() => {
        let timer = setInterval(() => {
            var navShow = localStorage.getItem("navShow");
            if (navShow == "null") {
                setMenuItem(<div style={{ backgroundColor: "black", padding: "15px", height: "20px" }}>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link style={{ color: "white", textDecoration: "none" }} to="/about">About</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link style={{ color: "white", textDecoration: "none" }} to="/login">Login</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link style={{ color: "white", textDecoration: "none" }} to="/register">Register</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                </div>);
            }else if(navShow=="profile"){
                setMenuItem(<div style={{ backgroundColor: "black", padding: "15px", height: "20px" }}>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link style={{ color: "white", textDecoration: "none" }} to="/profile">View Users List</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                </div>);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (<>
        {menuItem}
    </>);
}
export default Navbar;