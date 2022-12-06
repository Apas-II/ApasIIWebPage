
import React from 'react'
import {FaArrowUp}  from "react-icons/fa";
import ContactMeForum from './ContactMeForum.jsx';
function ContactMe() {
  return (
    <div className='ContactMe-Container'>
       <a id ="ContactMe" className ="ContactMe"></a>
      <div className = "ContactMe-Top" >
      <h1>Contact Me</h1>
      <p>Got any proyect in mind?</p>  
      </div>
      <ContactMeForum/>
     <div className = "ContactMe-Bottom">
      <FaArrowUp/>
      </div>
      </div>
  )
}

export default ContactMe