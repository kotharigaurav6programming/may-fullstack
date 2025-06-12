import React from 'react';
import {createRoot} from 'react-dom/client';
import Banner, { Footer, Header, Navbar } from './test.jsx';

function MainComponent(){
    return(<>
        <Header/>
        <Navbar/>
        <Banner/>
        <Footer/>
    </>);
}

createRoot(document.getElementById("root")).render(<MainComponent/>);

