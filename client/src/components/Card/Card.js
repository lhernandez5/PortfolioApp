import React from "react";
import "./Card.css";
import Icon from "../Icon/Icon.js";

const Card = props => (
  // <div className="cardAndFlipper">
    <div
      className="flip-container"
      ontouchstart="this.classList.toggle('hover');"
    >
      <div className="flipper">
        <div className="front">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <Icon src={props.src} />
            </div>
          </div>
        </div>

        <div class="back">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p>{props.summary}</p>
              <a href={props.aTag} target="_blank">
                Click here to have a look!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  // </div> 
);

export default Card;
