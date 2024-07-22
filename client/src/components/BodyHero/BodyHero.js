import React from "react";
import "./BodyHero.css";

const BodyHero = ({header}) => (
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{header}</h1>
      </div>
    </div>
  </section>
);

export default BodyHero;
