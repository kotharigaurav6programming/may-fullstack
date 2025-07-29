import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetMessage } from "../store/userSlice";
function Home(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(resetMessage(''));
    },[]);
    return (<div style={{padding:"30px"}}>
        <h1>Home</h1>
        <p>
Life is a journey filled with unexpected twists, remarkable discoveries, and quiet moments that shape who we are. Each day brings opportunities to grow, whether through challenges, connections, or small acts of kindness. We often chase goals and dreams, forgetting to appreciate the beauty found in the present. The laughter of a friend, the serenity of a sunset, or the comfort of a favorite song can ground us. When we learn to embrace uncertainty with courage and curiosity, we unlock our true potential. Life isn’t about perfection—it’s about progress, presence, and finding meaning in the moments that matter. <br/><br/>
Life is a journey filled with unexpected twists, remarkable discoveries, and quiet moments that shape who we are. Each day brings opportunities to grow, whether through challenges, connections, or small acts of kindness. We often chase goals and dreams, forgetting to appreciate the beauty found in the present. The laughter of a friend, the serenity of a sunset, or the comfort of a favorite song can ground us. When we learn to embrace uncertainty with courage and curiosity, we unlock our true potential. Life isn’t about perfection—it’s about progress, presence, and finding meaning in the moments that matter.
        </p>
    </div>);
}
export default Home;