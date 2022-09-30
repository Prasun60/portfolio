import React from 'react'
import "../styles/projects.css"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import{AiOutlineFundProjectionScreen} from "react-icons/ai"
// import Image from "next/image"
function Projects() {
  return (
    <div className='projects' id='project'>
      <div className='projectheading'>
        <span >P</span>
        <span >R</span>
        <span >O</span>
        <span >J</span>
        <span >E</span>
        <span >C</span>
        <span >T</span>
        <span >S</span>
      </div>
      <div className='blob6'  ></div>
      <div className='timeline'>
        <VerticalTimeline className='line'>
          <VerticalTimelineElement className='vertical-timeline-element--work'
            iconStyle={{ background: "#03bcf4", color: "#fff", boxShadow:"10px 20px 30px blue" }}
            contentStyle={{background: "linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))"}}
          icon={<img src="https://img.icons8.com/color/2x/group-of-projects.png" alt="" height="50" width="50" />}
          >
            <h3 className='timelineheadingodd'>Blog Website</h3>
            <p className='timelinecontent'>An interactive Blog Website made with<br></br> Ejs , Mongodb , Node and express<br></br>which allows users to create and delete blogs... <a href='https://github.com/Prasun60/Blog-website' target="_blank">Veiw code</a></p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--work'
            iconStyle={{ background: "#db129f", color: "#fff", boxShadow:"-10px 20px 30px #a90578" }}
            contentStyle={{background: "linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))"}}
            icon={<img src="https://img.icons8.com/external-bearicons-glyph-bearicons/2x/external-To-Do-List-reminder-and-to-do-bearicons-glyph-bearicons.png" alt="" height="58" width="50" />}

          >
            <h3 className='timelineheadingeven'>Todo List Website</h3>
            <p className='timelinecontent'>A todolist website that allows user to maintain<br></br>a todolist on various topics simultaneously<br></br>made with Ejs , MongoDB , Node and Express... <a href='https://boiling-gorge-31574.herokuapp.com/' target="_blank"  >Visit Website</a></p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--work'
            iconStyle={{ background: "#03bcf4", color: "#fff", boxShadow:"10px 20px 30px blue" }}
            contentStyle={{background: "linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))"}}
            icon={<img src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/2x/external-phone-essentials-icongeek26-outline-colour-icongeek26.png" alt="" height="58" width="50" margin="20" />}

          >
            <h3 className='timelineheadingodd'>Mi Clone App</h3>
            <p className='timelinecontent'>A Ecommerce Clone website of Xiomi <br></br> made with React and react hooks... <a href='https://mi-clone-wheat.vercel.app/' target="_blank" >Visit Website</a></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Projects