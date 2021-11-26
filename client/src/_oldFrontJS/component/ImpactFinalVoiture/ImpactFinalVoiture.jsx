import React from 'react';
import { ws, send } from "../../ws";
import {
  ContainerImpactFinal,
  QuitGame,
  ImpactVoiture,
  PopUpVoiture,
  QuitPopUp
} from "./ImpactFinalVoiture.styles";

class ImpactFinalVoiture extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // PROD
      client: props.client,
      // DEV
      // client: 2,
      popUpVoiture: false,
    }
  }

  componentDidMount() {
    ws.onmessage = (event) => {

    }
  }

  quitGame = () => {
    send("quitGame", { data: "quit" })
    console.log("QuitGame");
  }

  affichePopUp = () => {
    console.log("AffichePopUp");
    this.setState({ popUpVoiture: true });
  }

  quitPopUp = () => {
    this.setState({ popUpVoiture: false });
  }

  render() {
    const {
      client,
      popUpVoiture
    } = this.state

    // Prod
    let idJoueur = client;

    // Dev
    // let idJoueur = 1;

    if (idJoueur === 1) {
      return (
        <>
          <ContainerImpactFinal>
            <QuitGame onClick={this.quitGame}></QuitGame>
            <ImpactVoiture onClick={this.affichePopUp}></ImpactVoiture>
            {popUpVoiture === true && (
              <PopUpVoiture>
                <QuitGame onClick={this.quitGame}></QuitGame>
                <QuitPopUp onClick={this.quitPopUp}></QuitPopUp>
              </PopUpVoiture>
            )}
          </ContainerImpactFinal>
        </>
      )
    }

    return (
      <>
        <ContainerImpactFinal>
          <ImpactVoiture onClick={this.affichePopUp}></ImpactVoiture>
          {popUpVoiture === true && (
            <PopUpVoiture>
              <QuitPopUp onClick={this.quitPopUp}></QuitPopUp>
            </PopUpVoiture>
          )}
        </ContainerImpactFinal>
      </>
    )
  }
}

export default ImpactFinalVoiture;