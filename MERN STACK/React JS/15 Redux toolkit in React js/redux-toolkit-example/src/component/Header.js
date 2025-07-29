import { useSelector } from 'react-redux';
import '../style.css';
function Header(){
    const userData = useSelector(state=>state.user);
    return (<div id="header">
        <center>
        <h2>Redux Toolkit Example</h2>
        <p>{userData.counterTitle} : {userData.counter}</p>
        <p>{userData.tagLine}</p>
        </center>
    </div>);
}
export default Header;