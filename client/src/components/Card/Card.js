import React from "react";
import "./Card.css";
import Icon from "../Icon/Icon.js";

const Card = props => (
  <div
    className="flip-container"
    // ontouchstart="this.classList.toggle('hover');"
  >
    <div className="flipper">
      <div className="front">             
           <a href={props.goTag} target="_blank">


        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <Icon src={props.src} />
            <center>
                {/* <img src={process.env.PUBLIC_URL + "/images/go.png"} alt="go"/> */}
                {/* Turn the card! */}
             
            </center>
          </div>
        </div> 
        </a>
      </div>

      <div className="back">
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
);

export default Card;
