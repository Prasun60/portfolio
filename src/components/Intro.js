import React, { useRef, useEffect } from 'react'
import "../styles/intro.css"
import Typical from 'react-typical'
import img1 from "../pictures/profile2.jpg"
import StarfieldAnimation from "react-starfield-animation";

function Intro() {
  return (
    <div>
    <div className='intro'>
      <div className='container'>
        <h4>Hi, I'm Prasun,<div className='typing'>A <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Developer", 1500,
            "Coder", 1500,
            "Dancer", 1500
          ]}
        />
        </div>
        </h4>
        <div className='blob1'></div>
        <div className='about'><div className='heading'>About Me</div><p>I am an engineering student at ABV-IIITM, pursuing Btech-CSE,
          <br></br>I am a web-developer and competitive coder,<br></br>Block-Chain Enthusiast,<br></br>Love to dance in my free time
         </p><div className='blob2'></div>
        </div>
      </div>

      <div className='bio'>
        <div className='container1'>
          <div className='image'>
            <img className='profilepic' src={img1} alt='prasun pic'></img>
          </div>

          <div className='blob'></div>

        </div>

      </div>
    </div></div>
  )
}

export default Intro