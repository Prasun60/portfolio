import './App.css';
import Loader from "./components/Loader.js"
import Intro from "./components/Intro.js"
import StarfieldAnimation from "react-starfield-animation";
import React, { useState, useEffect } from 'react'
import Skills from "./components/Skills.js"
// import Stars from "./components/Stars.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contatct.js"
import Navbar from "./components/Navbar.js" 

function App() {
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
        SetLoading(false);
    }, 3000)
}, [])
  return (
    <>
    
          {loading&&<Loader loading={loading} SetLoading={SetLoading}  />}
          
          { !loading && <Navbar /> }
          { !loading && <Intro /> }
          { !loading && <Skills /> }
          { !loading && <Projects /> }
          { !loading && <Contact /> }


    </>

  );
}

export default App;
