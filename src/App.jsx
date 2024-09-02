import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import './index.css';

const App = () => {
  return (
   
      <div className="min-h-screen bg-gray-100">        
        
        <Header/>
        <Hero/>
        <About/>
        <Contact/>
        <Skills/>
        <Footer/>
       
      </div>

  );
};

export default App;
