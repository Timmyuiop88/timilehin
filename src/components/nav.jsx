import React from "react";

import { Component } from "react";
import logo from "./images/logo.png"

class Bar extends Component{
    render(){
        return(
            <div className="nav">
                <img src={logo} alt="not found" className="logo" />
            </div>
        )
    }
}
export default Bar