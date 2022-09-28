import React from 'react'
import "../styles/navbar.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Link} from "react-scroll"

function Navbar() {
  return (
      <div className='navbar'>
        <div className='nav-heading'><h2>Prasun Mondal</h2></div>
        <div className='sections'>
          <Link to="About" spy={true} smooth={true} offset={50} duration={500} className="section-item">
            About
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500} className="section-item">
            skills
          </Link>
          <Link to="project" spy={true} smooth={true} offset={50} duration={500} className="section-item">
            Projects
          </Link>
          <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} className="section-item">
            Contact
          </Link>
        </div>
      </div>
  )
}

export default Navbar