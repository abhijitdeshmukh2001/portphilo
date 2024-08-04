import React from 'react'
import './css/Project.css';
import Pronav from './Pronav';
import Webphoto from './Webphoto';
import Graficesphotos from './Graficesphotos';

const Allprojects = () => {
  return (
    <div className="projects">
    <h1 className='fw-bold ptext'>All projects</h1>
     <Pronav/>
     <br/>
     <Webphoto/>
     <br/>
     <Graficesphotos/>

   </div>
    


  )
}

export default Allprojects