import React, { Component } from "react";
import Circle from "./Circle";
import StartGameButton from "./StartGameButton";
import EndGameButton from "./EndGameButton";
import Modal from "./Modal";

import "./App.css";

const getRndInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min; //can be outside

class App extends Component {
  state = {
    circles: [1, 2, 3, 4, 5],
    score: 0,
    active: 0,
    pace: 1000,
    gameOver: false,
    rounds: 0,
    gameOn: false,
  };

  timer;

  clickHandler = (item) => {
    if (item !== this.state.active) {
      console.log(item);
      return this.endgame();
    }

    this.setState({
      score: this.state.score + 10,
      rounds: this.state.rounds - 1,
    });
  };

  // enableCircles = () => {
  //   this.state.circles.forEach((circle) => {
  //     circle.style.pointerEvents = "auto";
  //   });
  // };

  // we separated starthandler and picknew
  pickNew = () => {
    if (this.state.rounds >= 5) {
      return this.endgame();
    }

    let nextActive;

    do {
      nextActive = getRndInt(0, 5);
    } while (nextActive === this.state.active);

    console.log("picknew number", nextActive);
    this.setState({
      active: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });

    this.timer = setTimeout(this.pickNew, this.state.pace);
  };

  starthandler = () => {
    this.setState({
      gameOn: !this.state.gameOn,
    });
    this.pickNew();
    console.log("game started");
  };

  endgame = () => {
    clearTimeout(this.timer);
    this.setState({
      gameOver: !this.state.gameOver,
    });
    // this.setState({
    //   score: 0,
    //   active: 0,
  };

  closeHandler = () => {
    this.setState({
      gameOver: !this.state.gameOver,
      gameOn: !this.state.gameOn,
      score: 0,
      active: 0,
      pace: 1000,
      rounds: 0,
    });
  };

  render() {
    return (
      <div>
        <h2>SpeedGame</h2>
        <div>
          <p>
            Score: <span className="score">{this.state.score}</span>
          </p>
        </div>
        <div className="circles">
          {this.state.circles.map((circle, i) => (
            <Circle
              key={circle}
              number={i}
              click={() => this.clickHandler(circle)}
              active={this.state.current === circle}
              gameStatus={this.state.gameOn}
            />
          ))}
        </div>
        {this.state.gameOver && (
          <Modal close={this.closeHandler} score={this.state.score} />
        )}
        <div>
          {this.state.gameOn ? (
            <EndGameButton endBtn={this.endgame} />
          ) : (
            <StartGameButton onClick={this.starthandler} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
