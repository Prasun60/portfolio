import React from 'react'
import {Tooltip} from "@mui/material"
import styles from "../styles/skills.css"
import StarfieldAnimation from "react-starfield-animation";
import Robot from "./Model.js"
import index from 'react-starfield-animation';
const { Icons } = require("../data/data.js")


function Skills() {
    const IconItem = (props) =>
        <div className="skillpic" draggable={true}>
            <Tooltip title={props.name} arrow>
                <div>{React.createElement(props.icon, props.options)}</div>
            </Tooltip>
        </div>


    return (
        <div className='skills' id='About'>
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

            <Robot />

            <div className='ski'>
                <span  >S</span>
                <span >K</span>
                <span >I</span>
                <span >L</span>
                <span >L</span>
                <span >S</span>
                <div className='blob3'  ></div>
            </div>
            <div className='skill-image'id='skills' >
                <div className="picsection" >
                    {Icons.map((language, index) =>
                        language.icon &&
                        <IconItem
                            key={index}
                            icon={language.icon}
                            options={language.options}
                            name={language.name}
                            description={language.description}
                        ></IconItem>)
                    }
                </div>

            </div>
            <div className='afterlogo'></div>


        </div>

    )
}

export default Skills