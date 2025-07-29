import logo from './logo.svg';
import './App.css';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Sidebar from './component/Sidebar.js';
import Section from './component/Section.js';
function App() {
  return (<>
    <Header/>
    <div>
      <Sidebar/>
      <Section/>
    </div>
    <Footer/>
  </>);
}

export default App;
