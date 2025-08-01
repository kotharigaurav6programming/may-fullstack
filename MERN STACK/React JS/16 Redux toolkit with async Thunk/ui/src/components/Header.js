import logo from '../images/logo.jpg';
function Header(){
    return (<div style={{padding:"5px",marginLeft:"30px"}}>
        <img src={logo} style={{height:"60px"}} alt=""/>
        <span style={{fontSize:"30px",fontWeight:"700",position:"absolute",marginTop:"12px",marginLeft:"10px"}}>
            Redux Toolkit CRUD
        </span>
    </div>);
}
export default Header;