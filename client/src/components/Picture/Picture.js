import React from "react";
import "./Picture.css";

const Picture = () => (
  <img
    src={
        process.env.PUBLIC_URL + "/images/luzhernandez.png" ||
        "https://placehold.it/300x300"
      }
    className="picture"
    alt="Luz Hernandez"
  />
);

export default Picture;
