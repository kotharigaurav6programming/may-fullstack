import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import AdminLogin from './components/adminLogin.js';
import TeacherLogin from './components/TeacherLogin.js';
import AdminHome from './components/adminHome.js';
import StudentLogin from './components/StudentNewLogin.js';
import StudentRegistration from './components/StudentRegistration.js';
import TeacherRegistration from './components/TeacherRegistration.js';
import AdminAddSession from './components/adminAddSession.js';
import AdminAddClass from './components/adminAddClass.js';
import AdminAssignClass from './components/adminAssignClass.js';
import AdminTeacherList from './components/adminTeacherList.js';
import TeacherHome from './components/teacherHome.js';
import StudentHome from './components/studentHome.js';
function App() {
  return (<>
    <Header/>
    <Router>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/admin/adminHome' element={<AdminHome/>}/>
        <Route path='/teacherLogin' element={<TeacherLogin/>}/>
        <Route path='/teacher/teacherHome' element={<TeacherHome/>}/>
        <Route path='/studentLogin' element={<StudentLogin/>}/>        
        <Route path='/student/studentHome' element={<StudentHome/>}/>
        <Route path='/teacherRegistration' element={<TeacherRegistration/>}/>
        <Route path='/studentRegistration' element={<StudentRegistration/>}/>        
        <Route path='/adminAddSession' element={<AdminAddSession/>}/>
        <Route path='/adminAddClass' element={<AdminAddClass/>}/>
        <Route path='/adminAssignClass' element={<AdminAssignClass/>}/>
        <Route path='/adminTeacherList' element={<AdminTeacherList/>}/>
      </Routes>
    </Router>
  </>);
}

export default App;



