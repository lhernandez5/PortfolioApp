import React from "react";
import "./Icon.css";

const Icon = props => (
  <div
    className="thumbnail"
    role="img"
    aria-label="Image"
    style={{
      backgroundImage: `url(${props.src})`
    }}
    ontouchstart="this.classList.toggle('hover');"
  >
    <h5 className="card-title">{props.title}</h5>
  </div>
);

export default Icon;
