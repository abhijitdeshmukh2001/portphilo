import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
// import Home from './Home';
// import AboutMe from './AboutMe';
// import Projects from './Projects';
// import Skills from './Skills';
// import Contact from './Contact';


function Navbar() {
  return (
    <nav className="navbar">
        <div className='logo'>
            <h1>Portfolio</h1>
        </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">AboutMe</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
