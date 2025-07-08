import { useState } from "react";
import '../style.css';
function Register(){
    localStorage.setItem("navShow","null");
    const [message,setMessage]=useState('');
    const [userObj,setUserObj] = useState({});
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
            var data = JSON.parse(localStorage.getItem("data"));
            if(data==null){
                localStorage.setItem("data",JSON.stringify([...data||[],userObj]));
               // localStorage.setItem("message","Data Inserted Successfully");
                setMessage("Data Inserted Successfully");
            }
            else{
                var status = data.find((obj)=>{
                    return obj.email==userObj.email;
                })
                // console.log(status);
                if(!status){
                    localStorage.setItem("data",JSON.stringify([...data||[],userObj]));
                 //   localStorage.setItem("message","Data Inserted Successfully");
                setMessage("Data Inserted Successfully");
                }else{
                   // localStorage.setItem("message","Email Id Already Exist");
                setMessage("Email Id Already Exist");
                }
            }
        event.target.reset();
    }
    return (<div style={{padding:"30px"}}>
        <h1>Register Page</h1>
        {/* {localStorage.getItem("message") ? localStorage.getItem("message") : ""} */}
        {message ? message : ''}
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Username"
                name="username"
                onChange={getData}
            /> <br/>
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
                type="text"
                placeholder="Enter Address"
                name="address"
                onChange={getData}
            /> <br/>
            <input
                type="submit"
                value="Register"
            /> <br/>
            <input
                type="reset"
                value="Reset"
            />
        </form>
    </div>);
}
export default Register;