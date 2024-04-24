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
      I'm a software developer that has worked on the
      execution, deployment, and maintenance of business rules. My responsibilities
      ranged from tracking the development of the business rules to the
      deployment of changes.
    </p>
    <br />
  </div>
);

export default Intro;
