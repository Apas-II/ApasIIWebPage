import React from 'react'
import {FaLinkedin, FaInstagram, FaGithub, FaArrowRight}  from "react-icons/fa";
import ApasIILogo from "../Assets/IconApasII.svg"
function HeroPage() {
  return (
    <div className='HeroPage-Container'>
      <a id ="HeroPage" className ="Link-HeroPage"></a>
    <div className='HeroPage-Container-Left'>
    <span className ="HeroPage-Container-Left-Span1">Apas II</span>
<span className ="HeroPage-Container-Left-Span2">Front-End Developer</span>
<button className ="HeroPage-Container-Left-Button">About Me <FaArrowRight/></button>
    </div>
    <div  className='Logo-HeroPage' >
    <img src={ApasIILogo} alt="" className='Logo-HeroPage-img'/>

    </div>
    <div className='HeroPage-Container-Right'>
    <div className='HeroPage-Container-Right-icons'>
    <FaInstagram className='HeroPage-Container-Right-icons-a'/>
    </div>
    <div className='HeroPage-Container-Right-icons'>
    <FaGithub className='HeroPage-Container-Right-icons-a' />
    </div>
    <div className='HeroPage-Container-Right-icons'>
    <FaLinkedin  className='HeroPage-Container-Right-icons-a' />
    </div>
    </div>
      </div>
     
  )
}

export default HeroPage