
import PortfolioWindowComponent from './PortfolioWindowComponent.jsx';

function Portfolio() {
  return (
    <div  className='PortFolio-Container'>
      <a id="Portfolio" className='Link-Portfolio' ></a>
    <div className ="Portfolio-Top">
     <h1 className ="Portfolio-Top-H1">
     Portfolio & Proyects
      </h1 >
      <p className ="Portfolio-Top-P">
      I specialize in Web Development but i also have some knowlage in UX/UI Design. Here are some of the proyects that ive been working thus far
      </p>
    </div>
    <div className ="Portfolio-Bottom">
    <div className = "Portfolio-Bottom-Window-Rail" ></div>
    <PortfolioWindowComponent/>
    </div>
    </div>
  )
}

export default Portfolio