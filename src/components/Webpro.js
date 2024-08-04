import React from 'react'
import './css/Project.css';
import Pronav from './Pronav';
import Webphoto from './Webphoto';


const Webpro = () => {
  return (
    <div className="projects">
      <h1 className='fw-bold ptext'>Web projects</h1>
       <Pronav/>
     <br/>
     <br/>

     <Webphoto/>


   </div>
  )
}

export default Webpro