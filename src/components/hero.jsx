import React from "react";
import { Component } from "react";
import star from "./images/star.png";
import stary from "./images/star-y.png";
import person from "./images/person.png";
import location from "./images/location.png"
import arrowR from "./images/arrow-right.png"
class Hero extends Component {
  
  render() {
    return (
      <div  className="hero">
        <div>
          <img src={star} alt="not found" className="star" />
        </div>
        <div>
          <img src={stary} alt="not found" className="star-y" />
        </div>
        <div className="hero-image">
            <img src={person} alt="not found" className="person"/>
        </div>
        <div className="intro">
        <img src={location} alt="not found" className="location"/>
        <p>Anywhere with WIFI</p>
        </div>
        <div className="details">
          <span><p>TIMILEHIN</p></span>
         
          <span className="sp">
            FULL-STACK <br/>
            DEVELOPER
          </span>
        </div>
        <div className="details">
        <img src={arrowR} alt="not found" className="arrow"/>
        <span><p>ADEDARA</p></span>
        </div>
        <div className="detail">
        <p>Lorem ipsum dolor sit amet consectetur. Malesuada diam commodo etiam quis accumsan justo. Vestibulum accumsan vitae felis mauris augue. Nec pellentesque et eget et interdum. </p>
        </div>
      </div>
    );
  }
}
export default Hero;
