import React from 'react';
import {createRoot} from 'react-dom/client';

//createRoot(document.getElementById("root")).render("This is my First Example");

// {console.log(typeof createRoot(document.getElementById("root")))}

/*
const message = "This is my First Example...!!";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(message);
*/ 

/*
const root = createRoot(document.getElementById("root"));
root.render("This is my First Example...!!!!");
*/

const section = <div>
    <h2>Example of React</h2>
    <blockquote>
        This is an example of React. This is an example of React. This is an example of React. This is an example of React. This is an example of React. This is an example of React. This is an example of React. This is an example of React. This is an example of React. This is an example of React. This is an example of React. 
    </blockquote>
</div>
createRoot(document.getElementById("root")).render(section);
