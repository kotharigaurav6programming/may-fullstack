import '../style.css';
import banner from '../assets/images/banner.jpg';
function Home(){
    return (<div id='banner'>
        <img src={banner} id='bannerImage' alt=''/>
    </div>);
}
export default Home;