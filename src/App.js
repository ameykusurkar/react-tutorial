import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Game />
    );
  }
}

class Square extends Component {
  render() {
    return (
      <button className="square"></button>
    );
  }
}

class Board extends Component {
  renderSquare() {
    return <Square />;
  }

  render() {
    const status = "Next Player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default App;
