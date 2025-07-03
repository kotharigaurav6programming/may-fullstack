import { Link } from "react-router-dom";
function Navbar(){
    return (<div style={{backgroundColor:"black",padding:"15px",height:"20px"}}>
        <Link style={{color:"white",textDecoration:"none"}} to="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",textDecoration:"none"}} to="/about">About</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",textDecoration:"none"}} to="/contact">Contact</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",textDecoration:"none"}} to="/services">Services</Link> &nbsp;&nbsp;&nbsp;&nbsp;
    </div>);
}
export default Navbar;