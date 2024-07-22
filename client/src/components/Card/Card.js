import React from "react";
import "./Card.css";
import Icon from "../Icon/Icon.js";

const Card = ({ title, src, summary, aTag }) => (
  <div className="flip-container">
    <div className="flipper">
      <div className="front">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <Icon src={src} />
            <center>
              <img
                src={process.env.PUBLIC_URL + "/images/arrow.svg"}
                alt="go"
              />
            </center>
          </div>
        </div>
      </div>

      <div className="back">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{summary}</p>
            <a href={aTag} target="_blank">
              Click here to have a look!
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
