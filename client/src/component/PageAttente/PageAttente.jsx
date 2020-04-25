import React from "react";
// import ManetteBois from "../ManetteBois/ManetteBois";
import chargement from "../../video/chargement.mp4";
import { ws, on, send } from "../../ws";
import { VideoAttente } from "./PageAttente.styles.js";
import {
  JoystickContainer,
  InputX,
  InputY,
} from "../ManetteBois/ManetteBois.styles";
import { JoyStick } from "../ManetteBois/joy";

class PageAttente extends React.Component {
  //   state = {
  //     finVideo: "",
  //   };
  componentDidMount() {
    const Joy = new JoyStick("joy");

    var joy1X = document.getElementById("joy1X");
    var joy1Y = document.getElementById("joy1Y");

    const joystick = () => {
      // X
      joy1X.value = Joy.GetX();

      // Z
      joy1Y.value = Joy.GetY();

      // console.log("X : " + joy1X.value + " / Y : " + joy1Y.value);
      send("move", { x: joy1X.value, y: joy1Y.value });
    };

    setInterval(joystick, 100);
  }

  sauter = () => {
    // console.log(true);
    send("jump", { jump: true });
  };

  render() {
    setTimeout(() => {
      document.getElementById("video").style.display = "none";
    }, 14000);
    // const { finVideo } = this.state;

    // if (finVideo === "endVideo") {
    //   <ManetteBois />;
    // }

    return (
      <>
        <VideoAttente id="video" autoPlay muted>
          <source src={chargement} type="video/mp4"></source>
        </VideoAttente>
        <JoystickContainer id="joy"></JoystickContainer>
        <InputX id="joy1X" type="text" />
        <InputY id="joy1Y" type="text" />
        <button onClick={this.sauter}>Sauter</button>
      </>
    );
  }
}

export default PageAttente;
