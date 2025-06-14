import React from 'react';
import {createRoot} from 'react-dom/client';

// Class Component
class Header extends React.Component{
    render(){
        return(<>
            <h1>Header Component</h1>
            <p>This is Header component created by Functional component</p>
        </>);
    }
}
class Navbar extends React.Component{
    render(){
        return(<>
            <h1>Navbar Component</h1>
            <p>This is Navbar component created by Functional component</p>
        </>);
    }
}
class Banner extends React.Component{
    render(){
        return(<>
            <h1>Banner Component</h1>
            <p>This is Banner component created by Functional component</p>
        </>);
    }
}
class Footer extends React.Component{
    render(){
        return(<>
            <h1>Footer Component</h1>
            <p>This is Footer component created by Functional component</p>
        </>);
    }
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

