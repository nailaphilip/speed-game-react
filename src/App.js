import React, { Component } from "react";
import "./App.css";
import Circle from "./Circle";
import StartGameButton from "./StartGameButton";
import EndGameButton from "./EndGameButton";

const getRndInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min; //can be outside

class App extends Component {
  state = {
    circles: [1, 2, 3, 4, 5],
    score: 0,
    active: 0,
    pace: 1000,
    rounds: 0,
  };

  timer;

  clickHandler = (i) => {
    if (i !== this.state.active) {
      return this.endgame();
    }

    this.setState({
      score: this.state.score + 10,
    });
  };

  // enableCircles = () => {
  //   this.state.circles.forEach((circle) => {
  //     circle.style.pointerEvents = "auto";
  //   });
  // };

  endgame = () => {
    clearInterval(this.timer);
    this.setState({
      score: 0,
      active: 0,
    });
  };

  starthandler = () => {
    this.pickNew();
    console.log("game started");
  };
  // we separated starhandler and picknew
  pickNew = () => {
    if (this.state.rounds >= 10) {
      return this.endGame();
    }

    let nextActive;

    do {
      nextActive = getRndInt(0, 4);
    } while (nextActive === this.state.active);

    console.log("picknew number", nextActive);
    this.setState({
      active: nextActive,
      pace: this.state.pace - 10,
      rounds: this.state.rounds + 1,
    });

    this.timer = setTimeout(this.pickNew, this.state.pace);
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
            <Circle key={i} number={i} click={(e) => this.clickHandler(e, i)} />
          ))}
        </div>
        <div>
          <StartGameButton onClick={this.starthandler} />
          <EndGameButton onClick={this.endgame} />
        </div>
      </div>
    );
  }
}

export default App;
