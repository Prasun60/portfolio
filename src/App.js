import './App.css';
import Loader from "./components/Loader.js"
import Intro from "./components/Intro.js"
import StarfieldAnimation from "react-starfield-animation";
import React, { useState, useEffect } from 'react'
import Skills from "./components/Skills.js"
// import Stars from "./components/Stars.js"
import { Canvas } from '@react-three/fiber';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
        SetLoading(false);
    }, 1000)
}, [])

  return (
    <>
      <Router>
      {/* <StarfieldAnimation
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                }}
                numParticles={800}
                particleSpeed={0}
                dx={0.000000001} // x speed of stars in px/frame, default 0.05
                dy={0.000000001}
            /> */}
          {loading&&<Loader loading={loading} SetLoading={SetLoading}  />}
          { !loading && <Intro /> }
          { !loading && <Skills /> }

      </Router>

    </>

  );
}

export default App;
