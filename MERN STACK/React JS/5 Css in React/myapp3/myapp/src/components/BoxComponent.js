import '../css/style.css';
import banner from '../images/banner.jpg'
function BoxComponent(){
    return (<>
    <div id="box">
        <div id="box1">
            <img src={banner} id="box_image" alt=""/>
            <button class="margin_btn" id="box_btn">+</button>
            <input  id="box_input" type="number" step="1" min="0" max="1000" placeholder="Enter Quantity"/>
            <button id="box_btn">-</button>
        </div>
        <div id="box2">
            <img src={banner} id="box_image" alt=""/>
            <button class="margin_btn" id="box_btn">+</button>
            <input  id="box_input" type="number" step="1" min="0" max="1000" placeholder="Enter Quantity"/>
            <button id="box_btn">-</button>
        </div>
        <div id="box3">
            <img src={banner} id="box_image" alt=""/>
            <button class="margin_btn" id="box_btn">+</button>
            <input  id="box_input" type="number" step="1" min="0" max="1000" placeholder="Enter Quantity"/>
            <button id="box_btn">-</button>
        </div>
    </div>

    </>);
}
export default BoxComponent;