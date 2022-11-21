
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
// import Loader from './components/loader'
import About from './components/About';
import Nodatapage from './components/Nodatapage'
import Gallary from './components/Gallary';
import Team from './components/Team';
import Contact from './components/Contact';
import Culture from './components/Culture';
import Calender from './components/Calender';
import Membership from './components/Membership';

const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/calender" element={<Calender />} />
		      <Route path="/membership" element={<Membership/>} />
          <Route path="*" element={<Nodatapage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
     </>
  
  )
}

export default App
