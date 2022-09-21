import React from 'react'
import "../styles/skills.css"
import StarfieldAnimation from "react-starfield-animation";
import Robot from "./Model.js"




function Skills() {
  return (
      <div className='skills'>
        <StarfieldAnimation
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                }}
                numParticles={800}
                particleSpeed={0}
                dx={0.000000001} // x speed of stars in px/frame, default 0.05
                dy={0.000000001}
            />

            <Robot />

        <div className='ski'>
            <span >S</span>
            <span >K</span>
            <span >I</span>
            <span >L</span> 
            <span >L</span>
            <span >S</span>
        </div>
        <div className='skill-image'>sdgdrs</div>
        
  </div>
        
  )
}

export default Skills