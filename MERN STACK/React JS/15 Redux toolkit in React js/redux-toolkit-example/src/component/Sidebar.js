import { useDispatch, useSelector } from 'react-redux';
import '../style.css';
import { reset } from '../store/userSlice.js';
function Sidebar(){
    const userData = useSelector(state=>state.user);
    const dispatch = useDispatch();
    return (<div id="sidebar">
        <p>{userData.counterTitle} : {userData.counter}</p>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>);
}
export default Sidebar;