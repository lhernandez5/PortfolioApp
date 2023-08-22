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
      I previously worked at TIAA as a software developer. I work on the execution, deployment, and maintenance of business
      rules. This system exists as middleware to provide consuming apps with a business decision based on business rules
      with the use of REST APIs. My responsibilities ranged from tracking the development of the business rules using
      Java, Gradle, the Springboot Framework, to the deployment using Git, Jenkins, Artifactory, and Electric Flow.
    </p>
    <br />
  </div>
);

export default Intro;
