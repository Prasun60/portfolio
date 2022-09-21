import React, { useState, useEffect } from 'react'
import "../styles/loader.css"
import StarfieldAnimation from "react-starfield-animation";



function Loader(loading, SetLoading) {
   
    return (
        <div className='loader'>
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
            {
                loading ?
                    <div className='body-loader'>
                        <h2 className='h2-loader'>
                            <span>L</span>
                            <span>o</span>
                            <span>a</span>
                            <span>d</span>
                            <span>i</span>
                            <span>n</span>
                            <span>g</span>
                            <span>...</span>
                        </h2>
                    </div>
                    :
                    <div></div>
            }
        </div>
    )
}

export default Loader