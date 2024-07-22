import React from "react";
import "./Icon.css";

const Icon = ({src}) => (
  <div
    className="thumbnail"
    role="img"
    aria-label="Image"
    style={{
      backgroundImage: `url(${src})`,
    }}
  ></div>
);

export default Icon;
