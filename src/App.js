import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: Array(9).fill(null),
      player: "X" || "O",
      winner: null
    } 
  }

  getWinner() {
    let winLines = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6']
    ]
    for(let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      if(this.state.boxes[a] && this.state.boxes[a] === this.state.boxes[b] && this.state.boxes[a] === this.state.boxes[c]) {
        alert(`${this.state.player} won!`);
        this.setState({
          winner: this.state.player
        })
      } 
    }
  }

  handleClick(index) {
    let newBoxes = this.state.boxes;
    if(this.state.boxes[index] === null && !this.state.winner) {
      newBoxes[index] = this.state.player;
      this.setState({
        boxes: newBoxes,
        player: this.state.player === "X" ? "O" : "X"
      })

      this.getWinner()

    }
  }

  render() {
    const Box = this.state.boxes.map(
      (box, index) => 
        <div className="box" 
        key={index} 
        onClick={() => this.handleClick(index)}>
          {box}
      </div>
    )
    return (
      <div className="container">
      <span id = "turn">Play</span>        
        <div className="boxes">
          {Box}
        </div>
      </div>    
    );
  }
}

export default App;



