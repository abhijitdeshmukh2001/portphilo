import React from 'react'
import './css/Project.css';
import Pronav from './Pronav';
import Graficesphotos from './Graficesphotos';

const Grafic = () => {
  return (
    <div className="projects">
      <h1 className='fw-bold ptext'>Graphic projects</h1>
    <Pronav/>
    <br/>
    <Graficesphotos/>
   </div>

  )
}

export default Grafic