import React from 'react'
import {FaArrowLeft, FaArrowRight}from "react-icons/fa";
function Portfolio() {
  return (
    <div  className='PortFolio-Container'>
      <a id="Portfolio" className='Link-Portfolio' ></a>
    <div>
     <h1>
     Portfolio & Proyects
      </h1>
      <p>
      I specialize in Web Development but i also have some knowlage in UX/UI Design. Here are some of the proyects that ive been working thus far
      </p>
    </div>
    <div>

<FaArrowLeft/>
<FaArrowRight/> 

    </div>
    </div>
  )
}

export default Portfolio