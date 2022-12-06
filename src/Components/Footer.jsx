import React from 'react'
import {FaLinkedin, FaInstagram, FaGithub}  from "react-icons/fa";
import ApasIILogo from "../Assets/IconApasII.svg"
function Footer() {
  return (
    <div className='Footer-Container' id="Footer">
    <div className = "Footer-Left" >
      <span> (c) Juan Pablo Rayeb. 2022. All Rights reserved</span>
      <img src={ApasIILogo} alt="" className='Logo-Footer-img'/>
      </div> 
    
    <div className = "Footer-Center">
    <span>Juampi.rayeb@gmail.com</span>
    <span>+54-1156007605</span>
    </div>
<div className = "Footer-Right">
  <a href="https://www.linkedin.com/in/juanrayeb/" target="_blank">
<FaLinkedin className = "Footer-Right-icons"  />
</a>
<a target="_blank">
<FaInstagram className = "Footer-Right-icons"/>
</a>
<a href='https://github.com/Apas-II?tab=repositories'target="_blank">
<FaGithub className = "Footer-Right-icons"/>
</a>
</div>
    </div>
  )
}

export default Footer