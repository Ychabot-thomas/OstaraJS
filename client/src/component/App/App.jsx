import React, { Component } from "react";
import Connexion from "../Connexion/Connexion";
import flecheCercle from "../../img/flecheCercle.png";
import "./App.css";
// import { ws, send, on } from "../../ws";

class App extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }

  render() {
    const { width } = this.state;
    const { height } = this.state;
    const tablet = 1024;

    console.log(width);
    console.log(height);

    if (width > tablet) {
      return (
        <div>
          <p>Le jeu ne peut être jouer dans ce format d'écran</p>
        </div>
      );
    }

    if (width < height) {
      return (
        <div className="portrait">
          <img className="cercle" src={flecheCercle} alt="flecheCercle" />
        </div>
      );
    }

    return (
      <div className="paysage">
        <Connexion />
      </div>
    );
  }
}

export default App;
