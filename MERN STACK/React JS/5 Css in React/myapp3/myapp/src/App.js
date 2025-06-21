import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent.js';
import BannerComponent from './components/BannerComponent.js';
import SectionComponent from './components/SectionComponent.js';
import BoxComponent from './components/BoxComponent.js';
import AboutComponent from './components/AboutComponent.js';
import ContactComponent from './components/ContactComponent.js';
import FooterComponent from './components/FooterComoponent.js';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.js';
function App() {
  return (<>
      <HeaderComponent/>
      <NavbarComponent/>
      <BannerComponent/>
      <SectionComponent/>
      <BoxComponent/>
      <AboutComponent/>
      <ContactComponent/>
      <FooterComponent/>
  </>);
}

export default App;
