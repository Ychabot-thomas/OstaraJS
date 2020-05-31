import React from "react";
import { MannetteContainerJoueur1, MannetteContainerJoueur2, MannetteContainerJoueur3, MannetteContainerJoueur4, ActionContainerJoueur, RessourceContainer, NamePlayer, InteractionPlayer, JoystickContainer, InputX, InputY } from "./ManetteBois.styles";
import { JoyStick } from "./joy";
import { ws, on, send } from "../../ws";
import logo_partage from "../../img/logo_partage_ressource.png";
import logo_parametre from "../../img/logo_parametre.png";
import "./ManetteBois.css";

class Manette extends React.Component {
  state = {
    X: 0,
    Y: 0,
    pierreJ1: 0,
    graineJ1: 0,
    fruitJ1: 0,
  };

  // componentDidMount() {
  //   const Joy = new JoyStick("joy");

  //   const joystick = () => {
  //     // X
  //     let valueX = Joy.GetX();

  //     // Z
  //     let valueY = Joy.GetY();

  //     if (valueX != this.state.X || valueY != this.state.Y) {
  //       this.setState({ X: valueX });
  //       this.setState({ Y: valueY });
  //       console.log("Changement de valeur X ou Y") ;
  //       // send("move", { x: valueX, y: valueY });
  //     }
  //   };

  //   setInterval(joystick, 100);

  //   ws.onmessage = (event) => { };
  // }

  // sauter = () => {
  //   console.log("jump");
  //   // send("jump", { jump: true });
  // };

  render() {

    // if (client === 1) {
    return (
      <>
        <MannetteContainerJoueur1>
          <ActionContainerJoueur>
            <RessourceContainer>
              <img />
              {this.state.pierre}
              {this.state.graine}
              {this.state.fruit}
            </RessourceContainer>
            <NamePlayer>SANDR</NamePlayer>
            <InteractionPlayer>
              <img src={logo_partage} alt="logo_partage" />
              <img src={logo_parametre} alt="logo_parametre" />
            </InteractionPlayer>
          </ActionContainerJoueur>
          {/* <JoystickContainer id="joy"></JoystickContainer>
          <button onClick={this.sauter}>Sauter</button> */}
        </MannetteContainerJoueur1>
      </>
    );
    // }

    // // if (client === 2) {
    // return (
    //   <>
    //      <MannetteContainerJoueur2>
    //      {/* <JoystickContainer id="joy"></JoystickContainer>
    //      <button onClick={this.sauter}>Sauter</button> */}
    //      </MannetteContainerJoueur2>
    //   </>
    // );
    // // }

    // // if (client === 3) {
    // return (
    //   <>
    //      <MannetteContainerJoueur3>
    //      {/* <JoystickContainer id="joy"></JoystickContainer>
    //      <button onClick={this.sauter}>Sauter</button> */}
    //      </MannetteContainerJoueur3>
    //   </>
    // );
    // // }

    // // if (client === 4) {
    // return (
    //   <>
    //      <MannetteContainerJoueur4>
    //      {/* <JoystickContainer id="joy"></JoystickContainer>
    //      <button onClick={this.sauter}>Sauter</button> */}
    //      </MannetteContainerJoueur4>
    //   </>
    // );
    // // }
  }
}

export default Manette;
