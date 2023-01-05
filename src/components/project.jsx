import React, { Component } from "react";
import mouse from './images/Mouse.png'
import Singles from "./single_project.jsx";
class Project extends Component{
    render(){

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
        <Singles />
        <Singles />
        <Singles />
        <Singles />
            </div>
        </div>
    </div>
)


    }

}
export default Project
