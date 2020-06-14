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
  state = {
    afficheConnexion: false,
    value: "",
    video: "",
    client: 0,
    verifCode: "",
  }

  touchScreen = () => {
    this.setState({ afficheConnexion: true });
  };

  handleChange = (event) => {
    this.setState({ value: parseInt(event.target.value) });
  }

  handleSubmit = (event) => {
    // console.log("Le code envoyé est : " + this.state.value);
    send("codeClient", { code: this.state.value });
    event.preventDefault();
  }

  componentDidMount() {
    ws.onmessage = (event) => {
      on(event.data, "verifCode", (str) => {
        if (str.verif === "code Accepté") {
          let idClient = str.idClient;
          console.log(idClient);
          this.setState({ client: idClient, verifCode: "success" });
        }
        if (str.verif === "code Accepté Mais") {
          this.setState({ verifCode: "errorMaxPlayer" });
        }
        if (str.verif === "Code refusé") {
          this.setState({ verifCode: "error" });
        }
      });
      on(event.data, "videoStart", (str) => {
        console.log(str.active);
        this.setState({ video: str.active });
      });
    };
  }

  deleteDiv = () => {
    this.setState({ verifCode: "" });
  };

  render() {
    const {
      afficheConnexion,
      value,
      video,
      client,
      verifCode
    } = this.state;

    if (video === "playVideo") {
      return <PageAttente idClient={client} />;
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
        {verifCode === "error" && (
          <ContainerConnexionFalse>
            <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
            <CrossText>
              Code incorrect
          </CrossText>
          </ContainerConnexionFalse>
        )}

        {verifCode === "success" && (
          <ContainerConnexionTrue>
            Code correct !
            <br />
            Attendez que tous les joueurs se connectent
          </ContainerConnexionTrue>
        )}

        {verifCode === "errorMaxPlayer" && (
          <ContainerConnexionTrueBut>
            <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
            <CrossText>
              Code correct !
            <br />
            Mais le nombre de joueurs est à son maximum
          </CrossText>
          (Revenez jouez plus tard !)
          </ContainerConnexionTrueBut>
        )}

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
