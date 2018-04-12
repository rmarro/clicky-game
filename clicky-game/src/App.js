import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import GameContainer from "./components/GameContainer";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Title />
        <GameContainer>{this.props.children}</GameContainer>
      </div>
    );
  }
}

export default App;
