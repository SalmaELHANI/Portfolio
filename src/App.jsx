import './App.css';
import { React, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePage from './components/HomePage';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<Hero />} />
          <Route path='/about' element={<About/>} />
          <Route path='/service' element={<Services />} />
          <Route path='/work' element={<Works/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
