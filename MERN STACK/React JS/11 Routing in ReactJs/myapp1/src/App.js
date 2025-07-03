import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import AboutUs from './components/AboutUs.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Contact1 from './components/Contact1.js';
import Contact2 from './components/Contact2.js';

function App() {
  return (<>
    <Router>
      <Header/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}>
            <Route path="contact1" element={<Contact1/>}/>
            <Route path="contact2" element={<Contact2/>}/>
          </Route>
          <Route path="/services" element={<Services/>}/>
        </Routes>
    </Router>
  </>);
}

export default App;
