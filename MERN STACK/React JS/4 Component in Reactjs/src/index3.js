import React from 'react';
import {createRoot} from 'react-dom/client';

// Functional Component
function Header(){
    return(<>
        <h1>Header Component</h1>
        <p>This is Header component created by Functional component</p>
    </>);
}
function Navbar(){
    return(<>
        <h1>Navbar Component</h1>
        <p>This is Navbar component created by Functional component</p>
    </>);
}
function Banner(){
    return(<>
        <h1>Banner Component</h1>
        <p>This is Banner component created by Functional component</p>
    </>);
}
function Footer(){
    return(<>
        <h1>Footer Component</h1>
        <p>This is Footer component created by Functional component</p>
    </>);
}

function MainComponent(){
    return(<>
        <Header/>
        <Navbar/>
        <Banner/>
        <Footer/>
    </>);
}

createRoot(document.getElementById("root")).render(<MainComponent/>);

