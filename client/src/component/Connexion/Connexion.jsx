import React, { Component } from "react";
import { ws, send, on } from "../../ws";
import styled from "styled-components";
import logoOstara from "../../img/logoOstara.png";
import logoGobelins from "../../img/logoGobelins.png";
import { InputCode, InputConnexion } from "./ConnexionPage";

class Connexion extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    afficheConnexion: false,
    value: "",
  };

  touchScreen = () => {
    this.setState({ afficheConnexion: true });
  };

  handleChange(event) {
    this.setState({ value: parseInt(event.target.value) });
  }

  handleSubmit(event) {
    console.log("Le code envoyé est : " + this.state.value);
    send("codeClient", { code: this.state.value });
    event.preventDefault();
  }

  componentDidUpdate() {
    ws.onmessage = (event) => {
      on(event.data, "verifCode", (str) => {
        console.log(str.verif);
        if (str.verif === "oui") {
          console.log("Bonjour à toi petit copain");
        }
      });
    };
  }

  render() {
    const { afficheConnexion } = this.state;
    const { value } = this.state;
    const DivTouch = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      min-height: 100vh;
    `;
    const ImgOstara = styled.img`
      width: 60%;
      margin: 0 auto;
    `;
    const ImgGobelins = styled.img`
      width: 8%;
      margin: 0 auto;
    `;
    const TitlePage = styled.h1`
      font-family: "Infini", sans-serif;
      color: #91541d;
      font-size: 20px;
      text-align: center;
      position: relative;
    `;

    const SpanTitle = styled.span`
      ::before,
      ::after {
        content: "";
        width: 110px;
        height: 2px;
        background-color: #91541d;
        position: absolute;
        top: 50%;
      }
      ::before {
        left: 135px;
      }

      ::after {
        margin-left: 15px;
      }
    `;

    const DivConnexionTitle = styled.div`
      width: 40%;
      background-color: #e5ae74;
      border-radius: 50px;
    `;

    const H1ConnexionTitle = styled.h1`
      font-family: "Infini", sans-serif;
      font-size: 28px;
      color: #332419;
      padding: 5px 5px 5px 60px;
      text-transform: uppercase;
    `;

    const TextConnexion = styled.p`
      font-family: "Infini", sans-serif;
      font-size: 14px;
      color: #dfa666;
    `;

    // const InputCode = styled.input.attrs((props) => ({
    //   type: "text",
    // }))`
    //   font-family: "Infini", sans-serif;
    //   background-color: #052e21;
    //   color: #e5ae74;
    //   border-radius: 10px solid #6d3200;
    // `;

    // const InputConnexion = styled.input.attrs((props) => ({
    //   type: "submit",
    //   value: "Valider",
    // }))`
    //   font-family: "Infini", sans-serif;
    //   font-size: 20px;
    //   color: #f8d5b1;
    // `;

    if (afficheConnexion === false) {
      return (
        <DivTouch onClick={this.touchScreen}>
          <ImgOstara src={logoOstara} alt="logo Ostara" />
          <TitlePage>
            <SpanTitle>Touchez l'écran</SpanTitle>
          </TitlePage>
          <ImgGobelins src={logoGobelins} alt="logo Gobelins" />
        </DivTouch>
      );
    }

    return (
      <>
        <DivConnexionTitle>
          <H1ConnexionTitle>Connexion</H1ConnexionTitle>
        </DivConnexionTitle>
        <TextConnexion>
          Entrez le code inscrit sur votre écran de jeu.
        </TextConnexion>
        <form onSubmit={this.handleSubmit}>
          <InputCode value={value} onChange={this.handleChange} />
          <InputConnexion />
        </form>
      </>
    );
  }
}

export default Connexion;
