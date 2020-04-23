import React, { Component } from "react";
import { ws, send, on } from "../../ws";
import logoOstara from "../../img/logoOstara.png";
import logoGobelins from "../../img/logoGobelins.png";
import {
  ContainerConnexionFalse,
  ContainerConnexionTrue,
  DivTouch,
  ImgOstara,
  ImgGobelins,
  TitlePage,
  SpanTitle,
  ConnexionContainer,
  ConnexionTitle,
  TextConnexion,
  InputCode,
  ContainerInputConnexion,
  InputConnexion,
} from "./Connexion.styles";

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
    // console.log("Le code envoyé est : " + this.state.value);
    send("codeClient", { code: this.state.value });
    event.preventDefault();
  }

  componentDidUpdate() {
    ws.onmessage = (event) => {
      on(event.data, "verifCode", (str) => {
        if (str.verif === "code Accepté") {
          alert("Succés, code correct");
        }
        if (str.verif === "code Accepté Mais") {
          alert("Le code a déjà été rentré 4 fois");
        }
        if (str.verif === "Code refusé") {
          alert("Erreur code incorect");
        }
      });
    };
  }

  render() {
    const { afficheConnexion } = this.state;
    const { value } = this.state;

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
        {/* <ContainerConnexionFalse>
          Désolé mais le code que vous avez rentré ne correspond pas au code
          généré par le jeu.
          <br />
          Veuillez réessayez avec le bon code.
        </ContainerConnexionFalse>
        <ContainerConnexionTrue>
          Votre connexion avec le jeu esr désormais active.
          <br />
          Merci de patienter que les 4 joueurs se connectent.
        </ContainerConnexionTrue> */}
        <ConnexionContainer>
          <ConnexionTitle>Connexion</ConnexionTitle>
        </ConnexionContainer>
        <TextConnexion>
          Entrez le code inscrit sur votre écran de jeu.
        </TextConnexion>
        <form onSubmit={this.handleSubmit}>
          <InputCode type="text" value={value} onChange={this.handleChange} />
          <ContainerInputConnexion>
            <InputConnexion type="submit" value="Validé" />
          </ContainerInputConnexion>
        </form>
      </>
    );
  }
}

export default Connexion;
