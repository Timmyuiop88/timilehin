import React from "react";
import project from './images/project.png'
import east from './images/east.png'

function Singles (props){
  const toolz = props.toolz


  return(
     <div data-aos="fade-up" className="single">
        <div className="programming">
          <ul>
          {
          
        toolz.map((item) => <li>{item}</li>)   
          
            
        
          }
            <li>PHP</li>
            <li>REACT NATIVE</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="proj_image">
<img src={project} alt="not found"/>

        </div>
        <div className="proj_name">
          <div className="name1">
            <div className="worr">
              01<span className="dot">.</span>
            </div>
            <p>
            {props.Name}
            </p>
          </div>
          <div className="name2">
            <img src={east} alt="not found"/>
          </div>
        </div>
    </div>
  )
}
export default Singles