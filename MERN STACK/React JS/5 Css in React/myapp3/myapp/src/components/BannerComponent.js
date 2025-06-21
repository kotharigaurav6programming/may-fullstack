import '../css/style.css';
import banner from '../images/banner.jpg';
function BannerComponent(){
    return (<>
        <div id="images">
            <img src={banner} id="banner_img" alt=""/>
        </div>
    </>);
}
export default BannerComponent;