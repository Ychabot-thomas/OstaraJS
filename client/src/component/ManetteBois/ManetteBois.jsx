import React from "react";
import { JoystickContainer, InputX, InputY } from "./ManetteBois.styles";
import { JoyStick } from "./joy";
import { ws, on, send } from "../../ws";

class Manette extends React.Component {
  componentDidMount() {
    const Joy = new JoyStick("joy");

    var joy1X = document.getElementById("joy1X");
    var joy1Y = document.getElementById("joy1Y");

    const joystickX = () => {
      joy1X.value = Joy.GetX();
      // send("moveX", { x: joy1X.value });
    };
    const joystickY = () => {
      joy1Y.value = Joy.GetY();
      // send("moveY", { y: joy1Y.value });
    };

    setInterval(joystickX, 100);
    setInterval(joystickY, 100);
  }

  // sauter = () => {
  //   send("jump", { jump: true });
  // };

  render() {
    return (
      <>
        <JoystickContainer id="joy"></JoystickContainer>
        <InputX id="joy1X" type="text" />
        <InputY id="joy1Y" type="text" />
        {/* <button onClick={this.sauter}>Sauter</button> */}
      </>
    );
  }
}

export default Manette;
