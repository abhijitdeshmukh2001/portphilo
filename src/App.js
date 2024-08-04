import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Allprojects from './components/Allprojects';
import Webpro from './components/Webpro';
import Grafic from './components/Grafic';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/all" element={<Allprojects/>} />
          <Route path="/web" element={<Webpro/>} />
          <Route path="/graphic" element={<Grafic/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
