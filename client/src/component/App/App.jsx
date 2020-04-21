import React, { Component } from "react";
import Connexion from "../Connexion/Connexion";
import {
  ContainerPortrait,
  PicturePortrait,
  ContainerPaysage,
} from "./App.styles";
import flecheCercle from "../../img/flecheCercle.png";
import "./App.css";

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
        <ContainerPortrait>
          <PicturePortrait src={flecheCercle} alt="flecheCercle" />
        </ContainerPortrait>
      );
    }

    return (
      <ContainerPaysage>
        <Connexion />
      </ContainerPaysage>
    );
  }
}

export default App;
