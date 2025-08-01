import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import AddUser from './components/AddUser.js';
import ViewUser from './components/ViewUser.js';
import UpdateUser from './components/UpdateUser.js';
function App() {
  return (<>
    <Header/>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addUser' element={<AddUser/>}/>
        <Route path='/viewUser' element={<ViewUser/>}/>
        <Route path='/updateUser' element={<UpdateUser/>}/>
        
      </Routes>
    </Router>
  </>);
}

export default App;
