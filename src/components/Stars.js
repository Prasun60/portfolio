import React from 'react'
import StarfieldAnimation from "react-starfield-animation";
function ret(load) {
    if (load) {
        return (
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
        )
    } else {
        return (
            <StarfieldAnimation
                style={{
                    position: "relative",
                    bottom: "-784px",
                    width: "100%",
                    height: "100p%"
                }}
                numParticles={800}
                particleSpeed={0}
                dx={0.000000001} // x speed of stars in px/frame, default 0.05
                dy={0.000000001}
            />
        )
    }
}

function Stars(loading) {
    return (
        <div>
            {ret(loading)}
        </div>

    )
}

export default Stars