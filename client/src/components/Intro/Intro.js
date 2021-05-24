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
      I contributed to the development and deployment efforts to migrate 30 apps from a legacy Business Rule Management System platform to using an open source Platform.
      In addition, for this initiative I lead scrum, created stories in Jira, contributed to the development, and collaborated on solutions with QA and product teams.
    </p>
    <br />
    <p className="intro">
      It took one biology degree, one semester of Bioinformatics in grad school, and one coding boot camp to kick off my career in tech.
      It has not been a straight path but, with flexibility and perseverance I now have 2 years of experience as a software developer.
      I have had the opportunity to work with both front and back end technologies in various positions ranging from internships to my present position at TIAA.
    </p>
    <br />
    <p className="intro">
      The tools I work with includes
      with{" "}
      <strong>
       Java, Spring Boot, Gradle, Prometheus, Artifactory, Jenkins, Electric Flow, the Command Line, Visual Studio, and Git.
      </strong>
      .
    </p>
    <br />
    <p className="intro">
        Below are examples of projects I worked on during and after the coding boot camp at the University of North Carolina at Charlotte.
    </p>
  </div>
);

export default Intro;
