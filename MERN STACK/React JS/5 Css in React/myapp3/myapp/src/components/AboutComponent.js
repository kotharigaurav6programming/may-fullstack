import '../css/style.css';
import banner from '../images/banner.jpg';
function AboutComponent(){
    return (<>
    <div id="about"> 
        <br/><br/>
        <center>
            <h1>About Us</h1>
        </center>
        <div id="about_left">
            <img src={banner} id="about_banner" alt=""/>
        </div>
        <div id="about_right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, autem magnam sequi suscipit, sit nobis rerum fuga omnis nisi cupiditate eos officia placeat eum nesciunt quibusdam eligendi blanditiis temporibus iure fugit voluptatibus. Rem esse praesentium, perspiciatis quidem alias neque vero asperiores quisquam unde laborum maxime consectetur optio voluptates exercitationem nisi qui fuga aut quos. Rerum omnis labore non, unde aliquid dignissimos, laudantium incidunt numquam accusamus magnam corrupti necessitatibus laborum ducimus provident ab aperiam voluptates suscipit consectetur praesentium deleniti. Numquam cumque magnam nihil, magni ipsa saepe tenetur quasi consectetur officiis omnis in? Voluptatem ab esse quidem, eos sequi ex voluptatum enim dolores repudiandae rerum libero distinctio voluptate accusantium praesentium nostrum explicabo impedit porro perferendis facilis quas quam sit cupiditate illum recusandae.
        </div>
        <br/><br/>
    </div>
    </>);
}
export default AboutComponent;