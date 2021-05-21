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
      I contributed to the development and deployment efforts to migrate 30 apps from a legacy Business Rule Management System platform to using Red Hat’s open source Decision Manager Platform.
      In addition, for this initiative I lead scrum, created stories in Jira, contributed to the development, and collaborated on solutions with QA and product teams.
      </p>
      <br />
      <p className="intro">
      The tools I work with includes
      with{" "}
      <strong>
        Java, Spring Boot, Red Hat Decision Manager, Gradle, Prometheus, Artifactory, Jenkins, Electric Flow, the Command Line, Visual Studio, and Git.
      </strong>
      .
    </p>
    <br />
//    <p className="intro">
//      My goal is to get a position as a developer that continues to learn and
//      implement new technologies. Currently I'm working on improving my applications, implementing the
//      React.js library in all of my applications, and making then all mobile responsive.
//    </p>
  </div>
);

export default Intro;
