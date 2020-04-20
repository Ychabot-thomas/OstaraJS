import React from "react";
import { ws, on, send } from "../../ws";

class Manette extends React.Component {
  render() {
    return (
      <>
        {/* <img src="" alt="Logo Ostara O" /> */}
        <div id="buttonDirection">
          {/* <button onClick={haut}>Haut</button>
          <button onClick={bas}>Bas</button>
          <button onClick={gauche}>Gauche</button>
          <button onClick={droite}>Droite</button>
          <button onClick={sauter}>Sauter</button> */}
          Hello Manette
        </div>
      </>
    );
  }
}

export default Manette;
