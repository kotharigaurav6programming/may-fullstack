import {Link,Outlet} from 'react-router-dom';

function Contact(){
    return (<div style={{padding:"30px"}}>
        <Link to='/contact/contact1' style={{padding:"15px",backgroundColor:"black",color:"white"}}>Contact_1</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/contact/contact2' style={{padding:"15px",backgroundColor:"black",color:"white"}}>Contact_2</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Outlet/>
    </div>);
}
export default Contact;