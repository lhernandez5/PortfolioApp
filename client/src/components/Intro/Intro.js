import React from "react";
import "./Intro.css";


const Intro = () => (
  <div className="introDiv">
  <img
    src={
        process.env.PUBLIC_URL + "/images/luzhernandez.png" ||
        "https://placehold.it/300x300"
      }
    className="picture"
    alt="Luz Hernandez"
  />
    <p className="intro">
      I'm a Software Developer at TIAA.
      I currently work at TIAA as a developer on the Business Rule Management System Development team that is responsible for the decision logic layer of web and mobile apps.
    </p>
    <br />
  </div>
);

export default Intro;
