import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Board />
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
    return (
      <div>
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
}

export default App;
