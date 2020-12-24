import React, { useEffect } from "react";
import AboutMain from 'components/organisms/AboutMain';
import 'components/styles/About/AboutNav.css';
import { Link } from 'react-router-dom';



const About = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
    <nav>
       <ul className="about-ul">
         <li className='list'>
          <Link to='/about-luminouss' id="vision" style={{
            color:"green"
          }}> Vision&Mission </Link>
         </li>
         <li className='list'>
          <Link to='/about-luminouss-team' id="team" style={{
            color:"black"
          }}> Team </Link>
         </li>
         <li className='list'>
          <Link to='/about-luminouss-solution' id="solution" style={{
            color:"black"
          }}> Solution </Link>
         </li>
       </ul>
    </nav>
    <AboutMain />
    </>
  );
}

export default About;