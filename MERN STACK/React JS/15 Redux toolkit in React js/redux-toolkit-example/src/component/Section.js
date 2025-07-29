import { useDispatch } from 'react-redux';
import '../style.css';
import { decrement, increment, reset, setTagLine } from '../store/userSlice.js';
import { useState } from 'react';
function Section(){
    const dispatch = useDispatch();
    const [tagLineData,setTagLineData] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        event.target.reset();
    }
    return (<div id="section">
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter Tag Line'
                name='tagLine'
                onChange={(event)=>{
                    setTagLineData(event.target.value);
                }}
            /> 
            <button onClick={()=>{dispatch(setTagLine(tagLineData))}}>Set Tag Line</button>
        </form>
        <br/>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>

    </div>);
}
export default Section;