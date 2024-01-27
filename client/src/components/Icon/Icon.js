import React from "react";
import "./Icon.css";

const Icon = (props) => (
  <div
    className="thumbnail"
    role="img"
    aria-label="Image"
    style={{
      backgroundImage: `url(${props.src})`,
    }}
  ></div>
);

export default Icon;
