import React, { Component } from "react";
import { ws, send, on } from "../../ws";
import PageAttente from "../PageAttente/PageAttente";
import logoOstara from "../../img/logoOstara.png";
import logoGobelins from "../../img/logoGobelins.png";
import croix from "../../img/croix.png";
import {
  CrossCode,
  CrossText,
  ContainerConnexionFalse,
  ContainerConnexionTrue,
  ContainerConnexionTrueBut,
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
    video: "",
  };

  touchScreen = () => {
    this.setState({ afficheConnexion: true });
  };

  handleChange(event) {
    let values = this.state.value;
    if (values == NaN) {
      this.setState({ value: "" })
    } else {
      this.setState({ value: parseInt(event.target.value) });
    }
  }

  handleSubmit(event) {
    // console.log("Le code envoyé est : " + this.state.value);
    send("codeClient", { code: this.state.value });
    event.preventDefault();
  }

  componentDidMount() {
    ws.onmessage = (event) => {
      on(event.data, "verifCode", (str) => {
        if (str.verif === "code Accepté") {
          document.getElementById("true").style.display = "block";
        }
        if (str.verif === "code Accepté Mais") {
          document.getElementById("but").style.display = "block";
        }
        if (str.verif === "Code refusé") {
          document.getElementById("false").style.display = "block";
        }
      });
      on(event.data, "videoStart", (str) => {
        console.log(str.active);
        this.setState({ video: str.active });
      });
    };
  }

  deleteDiv = () => {
    document.getElementById("false").style.display = "none";
    document.getElementById("but").style.display = "none";
  };

  render() {
    const { afficheConnexion } = this.state;
    const { value } = this.state;
    const { video } = this.state;

    if (video === "playVideo") {
      return <PageAttente />;
    }

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
        <ContainerConnexionFalse id="false">
          <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
          <CrossText>
            Code incorrect
          </CrossText>
        </ContainerConnexionFalse>
        <ContainerConnexionTrue id="true">
          Code correct !
          <br />
          Attendez que tous les joueurs se connectent
        </ContainerConnexionTrue>
        <ContainerConnexionTrueBut id="but">
          <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
          <CrossText>
            Code correct !
            <br />
            Mais le nombre de joueurs est à son maximum
          </CrossText>
          (Revenez jouez plus tard !)
        </ContainerConnexionTrueBut>
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
