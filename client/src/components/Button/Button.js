import React from "react";
import "./Button.css";

const Button = ({ link, image }) => (
  <a href={link} target="_blank">
    <img src={image} className="iconButton" alt="iconButton" />
  </a>
);

export default Button;
