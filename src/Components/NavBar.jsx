import React, {useRef} from 'react'
import { Link } from 'react-scroll'
import ApasIILogo from "../Assets/IconApasII.svg"
import {FaBars} from "react-icons/fa";

function NavBar() {

  
  {
  return (
    <div className='Navbar_Containter'>
      <div className='Logo-Navbar'>
      <img src={ApasIILogo} alt="" className='Logo-NavBar-img'/>
      </div>
      <div className='Options-Navbar'>
    <li className='span-Options-Navbar'><Link className = "span-Options-Navbar-a"  to ="HeroPage" spy={true} smooth={true} >Home</Link></li>
    <li className='span-Options-Navbar'><a className = "span-Options-Navbar-a">About Me</a></li>
    <li className='span-Options-Navbar'><Link className = "span-Options-Navbar-a" to="Portfolio" spy={true} smooth={true}>Portfolio</Link></li>
    <li className='span-Options-Navbar'><Link to="ContactMe" className = "span-Options-Navbar-a" spy={true} smooth={true}>Contact Me</Link></li>
    </div>
    <div className='Menu-Options-Navbar-DropDown' tabIndex = "1">
    <FaBars className='Menu-Options-Navbar-FaBars'/>
    <div  className='Menu-Options-Navbar-DropDown-Menu'>
    <li className='span-Options-Navbar'><Link className = "span-Options-Navbar-a"  to ="HeroPage" spy={true} smooth={true} >Home</Link></li>
    <li className='span-Options-Navbar'><a className = "span-Options-Navbar-a">About Me</a></li>
    <li className='span-Options-Navbar'><Link className = "span-Options-Navbar-a" to="Portfolio" spy={true} smooth={true}>Portfolio</Link></li>
    <li className='span-Options-Navbar'><Link to="ContactMe" className = "span-Options-Navbar-a" spy={true} smooth={true}>Contact Me</Link></li>
   
    </div>
  
    </div>
    </div>
    
  )
}
}

export default NavBar