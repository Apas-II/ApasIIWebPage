import React from 'react'
import { useRef, useEffect,useState} from 'react'
import {FaArrowLeft, FaArrowRight}from "react-icons/fa";
import DataProyects from "./Proyects.js"
import {motion, MotionConfig} from "framer-motion";
import { Link } from 'react-scroll'
function PortfolioWindowComponent() {
  const [width, setWidth] = useState(0)
  const carrousel = useRef();
 
  useEffect(()=>{
   setWidth(carrousel.current.scrollWidth- carrousel.current.offsetWidth)
  }, [])
  return (
    <div className = "Portfolio-Bottom-Window">
  <motion.div className ="PortFolio-Carrousel" ref={carrousel}>
    <motion.div className ="PortFolio-Carrousel-Inner" drag ="x" dragConstraints ={{right:0, left: -width}} >
    { (DataProyects).map((DataProyects)=>{
     return(
      <div key = {DataProyects.id} className ="PortFolio-Carrousel-Inner-Item-div">
      <motion.div  className ="PortFolio-Carrousel-Inner-Item" id = {DataProyects.id}>
        <img src={DataProyects.image} />
        <div  className = "Portfolio-Bottom-Window-Description">
    <h1>{DataProyects.name}</h1>
    <p>{DataProyects.description}</p>
    <button>Go to Website</button>
  </div> 
      </motion.div>
      
      
      </div>
      )})}
      
      </motion.div>
    
</motion.div>

</div>
  )
}

export default PortfolioWindowComponent