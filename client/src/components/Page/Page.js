import React, { Component } from "react";
import Intro from "../Intro/Intro.js";
import TopHero from "../TopHero/TopHero.js";
import Card from "../Card/Card.js";
import { Col, Row, Wrapper } from "../Grid/index.js";
import Footer from "../Footer/index.js";
import Header from "../Header/Header.js";
import Button from "../Button/Button.js";
// import BodyHeader from "../BodyHero/BodyHero.js";
import "./Page.css";

class Container extends Component {
  render() {
    return (
      <div>
        <TopHero />
        {/* <BodyHeader header={"About Me"} /> */}
        <Wrapper>
          <Header>About Me</Header>
          <Row>
            <Col size="12">
              <Intro />
            </Col>
          </Row>
        </Wrapper>
        {/* <BodyHeader header={"My Works"} /> */}
        <Wrapper>
          <Header>Works</Header>
          <Row>
            <Col size="4">
              <Card
                title="Get It Together Financial Planner"
                src={
                  process.env.PUBLIC_URL + "/images/financialPlanner.png" ||
                  "https://placehold.it/300x300"
                }
                summary={
                  "This application allows to organize your spending and bills."
                }
                aTag={"https://stormy-everglades-57851.herokuapp.com/"}
              />
            </Col>
            <Col size="4">
              <Card
                title="Snippets"
                src={
                  process.env.PUBLIC_URL + "/images/snippets.png" ||
                  "https://placehold.it/300x300"
                }
                summary={
                  "Snippets is an application that allows users that are programmers to post snippets that they want to share."
                }
                aTag={"https://fathomless-garden-19281.herokuapp.com/"}
              />
            </Col>
            <Col size="4">
              <Card
                title="Clicky Game"
                src={
                  process.env.PUBLIC_URL + "/images/clicky_game.png" ||
                  "https://placehold.it/300x300"
                }
                summary={
                  "The clicky game requires you click on a Hunter X Hunter character once for a point."
                }
                aTag={"https://lhernandez5.github.io/Clicky_Game/"}
              />
            </Col>
          </Row>
          <Row>
            <Col size="4">
              <Card
                 title="Giftastic"
                 src={
                   process.env.PUBLIC_URL + "/images/gifTastic.png" ||
                   "https://placehold.it/300x300"
                 }
                 summary={
                   "Like gifs? Well click to have fun clicking on buttons to see gifs and create some buttons of your own!"
                 }
                 aTag={"https://lhernandez5.github.io/GifTastic/"}
              />
            </Col>
            <Col size="4">
              <Card
                 title="Crystals Collector"
                 src={
                   process.env.PUBLIC_URL + "/images/crystals.png" ||
                   "https://placehold.it/300x300"
                 }
                 summary={
                   "A game that requires you to do a little math in order to match the random number. You match your total by clicking on the crystals of different values."
                 }
                 aTag={"https://lhernandez5.github.io/crystals_collector/"}
              />
             </Col>
            <Col size="4">
              <Card
                title="Bamazon"
                src={
                  process.env.PUBLIC_URL + "/images/bamazon.png" ||
                  "https://placehold.it/300x300"
                }
                summary={
                  "This is an Amazon-like storefront app that takes in orders from customers and depletes stock from the store’s inventory. And the app will track product sales across the store’s departments and then provide a summary of the highest-grossing departments in the store. "
                }
                aTag={"https://lhernandez5.github.io/bamazon/"}
              />
            </Col>
          </Row>
        </Wrapper>
        {/* <BodyHeader header={"Links"} /> */}
        <Wrapper>
          <Header>Github? Resume? LinkedIn?</Header>
          <Row>
            <Col size="4">
              <Button
                link={"https://github.com/lhernandez5"}
                image={
                  process.env.PUBLIC_URL + "/images/github.svg" ||
                  "https://placehold.it/300x300"
                }
              />
            </Col>
            <Col size="4">
              <Button
                link={
                  "https://docs.google.com/document/d/1dd08t53gZAL9mqqsdAkjx5lda_oXuCx9gHzthlejT4E/edit"
                }
                image={
                  process.env.PUBLIC_URL + "/images/resume2.svg" ||
                  "https://placehold.it/300x300"
                }
              />
            </Col>
            <Col size="4">
              <Button
                link={"https://www.linkedin.com/in/--luz---hernandez/"}
                image={
                  process.env.PUBLIC_URL + "/images/linkedin.svg" ||
                  "https://placehold.it/300x300"
                }
              />
            </Col>
          </Row>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default Container;
