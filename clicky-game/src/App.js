import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";
import images from "./images.json";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Title>Clicky Cacti</Title>
        <div className="row">
          {
            images.map(image => {
              return <ImageCard image={image.image}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
