import React from "react";
import "./Button.css";

const Button = props => (
  <a href={props.link}>
    <img src={props.image} className="iconButton" target="_blank" alt="iconButton"/>
  </a>
);

export default Button;

