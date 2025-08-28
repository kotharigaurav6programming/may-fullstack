import '../style.css';
import logo from '../assets/images/logo.jpg';
function Header(){
    return (<div id='header'>
        <img src={logo} id='logoImage' alt=''/>
        <span id='heading'>KidLogBook</span>
    </div>);
}
export default Header;