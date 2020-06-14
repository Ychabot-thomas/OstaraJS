import React from 'react';
import { ws } from "../../ws";
import {
  ContainerImpactFinal,
  QuitGame,
  PopUpRosalie,
  ImpactRosalie,
  QuitPopUp
} from "./ImpactFinalRosalie.styles";

class ImpactFinalRosalie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // PROD
      client: props.client,
      // DEV
      // client: 1,
      popUpRosalie: false,
    }
  }

  componentDidMount() {
    ws.onmessage = (event) => {

    }
  }

  quitGame = () => {
    console.log("QuitGame");
  }

  affichePopUp = () => {
    console.log("AffichePopUp");
    this.setState({ popUpRosalie: true });
  }

  quitPopUp = () => {
    this.setState({ popUpRosalie: false });
  }

  render() {
    const {
      client,
      popUpRosalie
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
            <ImpactRosalie onClick={this.affichePopUp}></ImpactRosalie>
            {popUpRosalie === true && (
              <PopUpRosalie>
                <QuitGame onClick={this.quitGame}></QuitGame>
                <QuitPopUp onClick={this.quitPopUp}></QuitPopUp>
              </PopUpRosalie>
            )}
          </ContainerImpactFinal>
        </>
      )
    }

    return (
      <>
        <ContainerImpactFinal>
          <ImpactRosalie onClick={this.affichePopUp}></ImpactRosalie>
          {popUpRosalie === true && (
            <PopUpRosalie>
              <QuitPopUp onClick={this.quitPopUp}></QuitPopUp>
            </PopUpRosalie>
          )}
        </ContainerImpactFinal>
      </>
    )
  }
}

export default ImpactFinalRosalie;