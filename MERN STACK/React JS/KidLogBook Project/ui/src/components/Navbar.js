import { useEffect, useState } from 'react';
import '../style.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar(){
    const [menuItem,setMenuItem] = useState();
    const navShowObj = useSelector(state=>state.common);
    useEffect(()=>{
        let timer = setInterval(()=>{
            if(navShowObj.navShow=="home"){
                setMenuItem(<>
                    <Link to='/' id='navStyle'>Home</Link>
                    <Link to='/studentLogin' id='navStyle'>Parent</Link>
                    <Link to='/teacherLogin' id='navStyle'>Teacher</Link>
                    <Link to='' id='navStyle'>About</Link>
                    <Link to='' id='navStyle'>Contact</Link>
                    <Link to='' id='navStyle'>Services</Link>
                </>);
            }else if(navShowObj.navShow=="admin"){
                    setMenuItem(<>
                        <Link to='/admin/adminHome' id='navStyle'>Home</Link>
                        <Link to='' id='navStyle'>Students</Link>
                        <Link to='/adminTeacherList' id='navStyle'>Teacher</Link>
                        <Link to='/adminAddSession' id='navStyle'>Add Session</Link>
                        <Link to='/adminAddClass' id='navStyle'>Add Class</Link>
                        <Link to='/adminAssignClass' id='navStyle'>Assign Class</Link>
                        <Link to='' id='navStyle'>Logout</Link>
                    </>);
            }
        },500);
        return ()=> clearInterval(timer);
    });
    return (<div id='nav'>
        {menuItem}        
    </div>);
}
export default Navbar;