
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Footer from './Components/Footer';
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
