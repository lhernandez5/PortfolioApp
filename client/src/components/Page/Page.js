import React, { Component } from "react";
import Intro from "../Intro/Intro.js";
import TopHero from "../TopHero/TopHero.js";
import Card from "../Card/Card.js";
import { Col, Row, Wrapper } from "../Grid/index.js";
import Footer from "../Footer/index.js";
import Header from "../Header/Header.js";
import Button from "../Button/Button.js";


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
                 title="Rock Paper Scissors"
                 src={
                    process.env.PUBLIC_URL + "/images/paperRockScissors.png" ||
                    "https://placehold.it/300x300"
                 }
                 summary={
                     "This is an app where you can play a rock paper scissors game."
                 }
                 aTag={"https://rockpaperscissors-h282.onrender.com/"}
              />
             </Col>
          </Row>
          <Row>
             <Col size="4">
              <Card
                 title="Todo App"
                 src={
                    process.env.PUBLIC_URL + "/images/todoapp.png" ||
                    "https://placehold.it/300x300"
                 }
                 summary={
                     "A todo list application that allows you to add todos and delete them from your list."
                 }
                 aTag={"https://reacttodolist-qyqz.onrender.com/"}
              />
             </Col>
             <Col size="4">
              <Card
                 title="Tic Tac Toe"
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
