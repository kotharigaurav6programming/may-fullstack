import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Login(){
    localStorage.setItem("navShow","null");
const [userObj,setUserObj] = useState({});
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        });
    }
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = (event)=>{
        event.preventDefault();
            const userData = JSON.parse(localStorage.getItem("data"));
            if(userData){
                const res = userData.find((obj)=>{
                    return obj.email==userObj.email && obj.password==userObj.password;
                });
                if(res){
                    navigate('/profile');

                }else{
                    navigate('/login',{
                        state:{
                            message:"Email Id or Password is incorrect"
                        }
                    });
                }
            }else{
                 navigate('/login',{
                        state:{
                            message:"Needs to register first"
                        }
                    }); 
            }
        event.target.reset();
    }
    return (<div style={{padding:"30px"}}>
        <h1>Login Page</h1>
        {location.state?.message ? location.state.message : ''}
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={getData}
            /> <br/>
            <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={getData}
            /> <br/>
            <input
                type="submit"
                value="Login"
            /> <br/>
            <input
                type="reset"
                value="Reset"
            />
        </form>
    </div>);}
export default Login;