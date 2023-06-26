import React, { Component } from "react";
import mouse from './images/Mouse.png'
import givaa from './images/givaa.png'
import real from './images/real.jpg'
import project from './images/project.png'
import Singles from "./single_project.js";
function Project(){
return(
    <div className="project">
        <div className="mouse">
            <img src={mouse} alt="not found"/>
        </div>
        <div className="project_title">
            <div className="project_heading">
                <p>RECENT PROJECTS</p>

            </div>
            <div className="project_sub_heading">
                <p>
                    PROJECTS
                </p>

            </div>
            <div className="project_container">
        <Singles tools={['JS', 'REACT.JS', 'NEXT.JS', 'CSS', 'CHAKRA UI']} Name='Givaa' Image={givaa} link='https://eloquent-raindrop-2399c2.netlify.app/' />
        <Singles tools={['PHP', 'JS', 'MySQL', 'Bootstrap', 'CSS']} Name='Student real estates' Image={real} link='https://studentrealestates.com' />
        <Singles tools={['PHP', 'js']}Image={project} />
        <Singles tools={['PHP', 'js']} Image={project}/>
            </div>
        </div>
    </div>
)


    

}
export default Project
