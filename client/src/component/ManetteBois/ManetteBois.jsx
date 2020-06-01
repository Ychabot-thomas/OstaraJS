import React from "react";
import {
  MannetteContainerJoueur1,
  MannetteContainerJoueur2,
  MannetteContainerJoueur3,
  MannetteContainerJoueur4,
  ActionContainerJoueur,
  RessourceContainer,
  RessourcePart,
  RessourcePicture,
  NamePlayer,
  InteractionPlayer,
  InteractionPlayerPicture,
  ControlPlayer,
  JoystickContainer,
  ButtonPlayer,
  InputX,
  InputY
} from "./ManetteBois.styles";
import { JoyStick } from "./joy";
import { ws, on, send } from "../../ws";
import logo_pierre from "../../img/logo_pierre.png";
import logo_graine from "../../img/logo_graine.png";
import logo_fruit from "../../img/logo_fruit.png";
import logo_partage from "../../img/logo_partage_ressource.png";
import logo_parametre from "../../img/logo_parametre.png";
import logo_conseil from "../../img/logo_conseils.png";
import logo_information from "../../img/logo_informations.png";
import logo_map from "../../img/logo_map.png";
import "./ManetteBois.css";

class Manette extends React.Component {
  state = {
    X: 0,
    Y: 0,
    pierre: 0,
    graine: 0,
    fruit: 0,
  };

  componentDidMount() {
    const Joy = new JoyStick("joy");

    const joystick = () => {
      // X
      let valueX = Joy.GetX();

      // Z
      let valueY = Joy.GetY();

      if (valueX != this.state.X || valueY != this.state.Y) {
        this.setState({ X: valueX });
        this.setState({ Y: valueY });
        console.log("Changement de valeur X ou Y");
        // send("move", { x: valueX, y: valueY });
      }
    };

    setInterval(joystick, 100);

    ws.onmessage = (event) => { };
  }

  sauter = () => {
    console.log("jump");
    // send("jump", { jump: true });
  };

  parametres = () => {
    console.log("parametre");
  }

  conseils = () => {
    console.log("conseil");
  }

  informations = () => {
    console.log("informations");
  }

  map = () => {
    console.log("carte du jeu");
  }

  partage = () => {
    console.log("partage");
  }

  render() {

    // if (client === 1) {
    // return (
    //   <>
    //     <MannetteContainerJoueur1>
    //       <ActionContainerJoueur>
    //         <RessourceContainer>
    //           <RessourcePart>
    //             <RessourcePicture src={logo_pierre} />
    //             {this.state.pierre}
    //           </RessourcePart>
    //           <RessourcePart>
    //             <RessourcePicture src={logo_graine} />
    //             {this.state.graine}
    //           </RessourcePart>
    //           <RessourcePart>
    //             <RessourcePicture src={logo_fruit} />
    //             {this.state.fruit}
    //           </RessourcePart>
    //         </RessourceContainer>
    //         <NamePlayer>SANDR</NamePlayer>
    //         <InteractionPlayer>
    //           <InteractionPlayerPicture src={logo_partage} onClick={this.partage} />
    //           <InteractionPlayerPicture src={logo_parametre} onClick={this.parametre} />
    //         </InteractionPlayer>
    //       </ActionContainerJoueur>
    //       <ControlPlayer>
    //         <JoystickContainer id="joy"></JoystickContainer>
    //         <ButtonPlayer onClick={this.sauter}></ButtonPlayer>
    //       </ControlPlayer>
    //     </MannetteContainerJoueur1>
    //   </>
    // );
    // }

    // // if (client === 2) {
    // return (
    //   <>
    //     <MannetteContainerJoueur2>
    //       <ActionContainerJoueur>
    //         <RessourceContainer>
    //           <RessourcePart>
    //             <RessourcePicture src={logo_pierre} />
    //             {this.state.pierre}
    //           </RessourcePart>
    //           <RessourcePart>
    //             <RessourcePicture src={logo_graine} />
    //             {this.state.graine}
    //           </RessourcePart>
    //           <RessourcePart>
    //             <RessourcePicture src={logo_fruit} />
    //             {this.state.fruit}
    //           </RessourcePart>
    //         </RessourceContainer>
    //         <NamePlayer>DÉMETER</NamePlayer>
    //         <InteractionPlayer>
    //           <InteractionPlayerPicture src={logo_partage} onClick={this.partage} />
    //           <InteractionPlayerPicture src={logo_conseil} onClick={this.conseils} />
    //         </InteractionPlayer>
    //       </ActionContainerJoueur>
    //       <ControlPlayer>
    //         <JoystickContainer id="joy"></JoystickContainer>
    //         <ButtonPlayer onClick={this.sauter}></ButtonPlayer>
    //       </ControlPlayer>
    //     </MannetteContainerJoueur2>
    //   </>
    // );
    // }

    // // if (client === 3) {
    // return (
    //   <>
    //     <MannetteContainerJoueur3>
    //       <ActionContainerJoueur>
    //         <RessourceContainer>
    //           <RessourcePart>
    //             <RessourcePicture src={logo_pierre} />
    //             {this.state.pierre}
    //           </RessourcePart>
    //           <RessourcePart>
    //             <RessourcePicture src={logo_graine} />
    //             {this.state.graine}
    //           </RessourcePart>
    //           <RessourcePart>
    //             <RessourcePicture src={logo_fruit} />
    //             {this.state.fruit}
    //           </RessourcePart>
    //         </RessourceContainer>
    //         <NamePlayer>IÀN</NamePlayer>
    //         <InteractionPlayer>
    //           <InteractionPlayerPicture src={logo_partage} onClick={this.partage} />
    //           <InteractionPlayerPicture src={logo_information} onClick={this.informations} />
    //         </InteractionPlayer>
    //       </ActionContainerJoueur>
    //       <ControlPlayer>
    //         <JoystickContainer id="joy"></JoystickContainer>
    //         <ButtonPlayer onClick={this.sauter}></ButtonPlayer>
    //       </ControlPlayer>
    //     </MannetteContainerJoueur3>
    //   </>
    // );
    // // }

    // // if (client === 4) {
    return (
      <>
        <MannetteContainerJoueur4>
          <ActionContainerJoueur>
            <RessourceContainer>
              <RessourcePart>
                <RessourcePicture src={logo_pierre} />
                {this.state.pierre}
              </RessourcePart>
              <RessourcePart>
                <RessourcePicture src={logo_graine} />
                {this.state.graine}
              </RessourcePart>
              <RessourcePart>
                <RessourcePicture src={logo_fruit} />
                {this.state.fruit}
              </RessourcePart>
            </RessourceContainer>
            <NamePlayer>SEREN</NamePlayer>
            <InteractionPlayer>
              <InteractionPlayerPicture src={logo_partage} onClick={this.partage} />
              <InteractionPlayerPicture src={logo_map} onClick={this.map} />
            </InteractionPlayer>
          </ActionContainerJoueur>
          <ControlPlayer>
            <JoystickContainer id="joy"></JoystickContainer>
            <ButtonPlayer onClick={this.sauter}></ButtonPlayer>
          </ControlPlayer>
        </MannetteContainerJoueur4>
      </>
    );
    // // }
  }
}

export default Manette;
