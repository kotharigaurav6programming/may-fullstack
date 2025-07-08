import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import AboutUs from './components/AboutUs.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import ProfileComponent from './components/Profile.js';
function App() {
  return (<>
    <Router>
      <Header/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<ProfileComponent/>} />
        </Routes>
    </Router>
  </>);
}

export default App;
