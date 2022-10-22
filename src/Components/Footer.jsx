import React from 'react'
import {FaLinkedin, FaInstagram, FaGithub}  from "react-icons/fa";
function Footer() {
  return (
    <div className='Footer-Container' id="Footer">
    <div>
      <span> (c) Juan Pablo Rayeb. 2022. All Rights reserved</span>
      </div> 
    
    <div>
    <span>Juampi.rayeb@gmail.com</span>
    <span>+54-1156007605</span>
    </div>
<div>
<FaLinkedin/>
<FaInstagram/>
<FaGithub/>
</div>
    </div>
  )
}

export default Footer