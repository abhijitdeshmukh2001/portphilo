import React from 'react'
import './css/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='main' > 
    <h1 className='ftext fw-bold'><spin>P</spin>ortfolio</h1>

    <div className='navlist'>
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about">AboutMe</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div> 

    <h6 className='copy'>© 2024 All Rights Reserved by abhijitdeshmukh</h6>  
    
    </div>
  )
}

export default Footer