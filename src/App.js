import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';
import StartGameButton from './StartGameButton';
import EndGameButton from './EndGameButton';


class App extends Component {
  state= {
    circles: [1, 2, 3, 4, 5],
    score: 0,
    active: 0,
    pace: 1000,
    timer: '',
    rounds: 0,


  }


  clickHandler = (e, i) => {
      e.preventDefault()
      console.log('click', i)
      this.setState({
        score: this.state.score + 10
      })
    }

  

  endgame = () => {
    clearInterval(this.timer);
    this.setState({
      score: 0,
      isActive: false,
    });
    };


  

  starthandler = () => {
    if (this.state.rounds >= 10) {
      return endGame()
    }
     const nextActive = pickNew(this.state.active)
  
  
    this.setState.active = nextActive
  
  
    this.setState.timer = setTimeout(startHandler, this.state.pace)
  
    this.setState.pace -= 10
    this.setState.rounds++


    pickNew (this.state.active) {
      nextActive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
      if (nextActive !== this.state.active
      ) {
        return nextActive
      }
      return pickNew(this.state.active)
    }
    


  render() {
    return (
      <div>
        <h2>SpeedGame</h2>
        <div>
        <p>Score: <span className="score">{this.state.score}</span></p>
      </div>
      <div className='circles'>
      {this.state.circles.map((circle,i) => <Circle key={i} number={i} click={(e)=>this.clickHandler(e, i)}/>)}
      </div>
        <div>
        <StartGameButton onClick={this.starthandler} />
        <EndGameButton onClick={this.endhandler} />
      </div>
      </div>
    );
  }
}

export default App;




