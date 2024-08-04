import React from 'react'
import './css/Project.css';
import { Link } from 'react-router-dom';

const Pronav = () => {
  return (
    <div className="projects">
    <div className=''>
      
        <div className='btnsgrop'>
        <Link to={'/all'} ><button type="button" class="btn round-pill ">All</button> </Link>
        <Link to={'/web'}> <button type="button" class="btn round-pill ">Web Projects</button></Link>
        <Link to={'/graphic'}> <button type="button" class="btn round-pill">Graphic designs</button></Link>
        </div>
     </div>
   </div>
  )
}

export default Pronav