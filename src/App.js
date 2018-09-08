import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: Array(9).fill(null),
      player: "X",
      winner: null
    } 
  }

  getWinner() {
    let winLines = [
      ['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'],   // horizontal lines
      ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'],   // vertical lines
      ['0', '4', '8'], ['2', '4', '6']                     // diagonal lines
    ]

    this.checkMatch(winLines);

  }

  checkMatch(winLines) {
    for(let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      let boxes = this.state.boxes;
      if(boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
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
        player: this.state.player === "X" ? "O" : "X",
        
      })

      this.getWinner();

    }
  }

  replay() {
    this.setState({
      player: "O",
      winner: null,
      boxes: Array(9).fill(null)
    })
  }

  render() {
    const board = this.state.boxes.map(
      (box, index) => 
        <div className="box"
          key={index} 
          onClick={() => this.handleClick(index)}
        >
          {box}
        </div>
    )
    return ( 
      <div className="container"> 
      <span id="turn">Play</span>        
        {board}
        <button 
          disabled={!this.state.winner} 
          onClick={() => this.replay()}
        >
          Play again
        </button>
      </div>  
    );
  }
}

export default App;
