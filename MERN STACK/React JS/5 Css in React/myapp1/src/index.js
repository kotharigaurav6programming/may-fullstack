import React from 'react';
import {createRoot} from 'react-dom/client';

// const result =  <div style={{backgroundColor:"crimson",color:"white",textTransform:"uppercase"}}>
//     This is an example of Css in React
// </div>

// const styles = {backgroundColor:"green",color:"red",textTransform:"uppercase"}
// const result =  <div style={styles}>
//     This is an example of Css in React
// </div>

/*
const styles = {
    style1 : {
                backgroundColor:"green",
                color:"red"
            },
    style2 : {
                textTransform:"uppercase"
            }
}
const result =  <div>
    <h1 style={styles.style1}>React Js</h1>
    <p style={styles.style2}>This is an example of Css in React</p>
</div>
*/
/*
import './style.css';
const result =  <div>
    <h1 className='second'>React Js</h1>
    <p id='first'>This is an example of Css in React</p>
</div>
*/

import styled from 'styled-components';
const MyParagraph = styled.p`
    color : white;
    font-family : cursive;
    font-size : 20px;
    background-color : brown;
`;
const result = <MyParagraph>
    <div>This is my first statement</div>
    <p>This is my second statement</p>
</MyParagraph>

createRoot(document.getElementById("root")).render(result);