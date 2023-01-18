import React from "react";
import "./about.css"
import image from "../../../images/sec-1.png"

export default function AboutSection () {
    return (
        <div id="about" className="dark">
            <div id="left">
                <h1>ABU ROBOCON</h1>
                <h2>An Ultimate Robotics Contest for Undergrads</h2>
                <p>We build Robots that aim at incredible Precision, Reliability and Speed or in other words Industrial performance.</p>
                <a className="button">Get Started</a>
            </div>
            <div id="right">
                <img src={image} />
            </div>
        </div>
    )
}