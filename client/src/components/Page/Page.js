import React from "react";
import Intro from "../Intro/Intro.js";
import TopHero from "../TopHero/TopHero.js";
import Card from "../Card/Card.js";
import { Col, Row, Wrapper } from "../Grid/index.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import Button from "../Button/Button.js";

const Page = () => {
  return (
    <div>
      <TopHero />
      <Wrapper>
        <Header>About Me</Header>
        <Row>
          <Col size="12">
            <Intro />
          </Col>
        </Row>
      </Wrapper>
      <Wrapper>
        <Header>Works</Header>
        <Row>
          <Col size="4">
            <Card
              title="Weather App"
              src={
                process.env.PUBLIC_URL + "/images/weatherApp.png" ||
                "https://placehold.it/300x300"
              }
              summary={
                "In this weather app you can type in a city and get the day's weather and the forecast for the current week."
              }
              aTag={"https://weatherapp-afom.onrender.com/"}
            />
          </Col>
          <Col size="4">
            <Card
              title="Giftastic App"
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
              title="Build Your Own Trivia Quiz"
              src={
                process.env.PUBLIC_URL + "/images/triviaQuiz.png" ||
                "https://placehold.it/300x300"
              }
              summary={
                "This app allows you to build a trivia quiz based on the selections you make."
              }
              aTag={"https://quiz-app-rhnn.onrender.com/"}
            />
          </Col>
        </Row>
        <Row>
          <Col size="4">
            <Card
              title="Tic Tac Toe App"
              src={
                process.env.PUBLIC_URL + "/images/tictactoe.png" ||
                "https://placehold.it/300x300"
              }
              summary={
                "This is an app where you can play a quick TicTacToe game."
              }
              aTag={"https://tictactoe-3stk.onrender.com/"}
            />
          </Col>
        </Row>
      </Wrapper>
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
};

export default Page;
