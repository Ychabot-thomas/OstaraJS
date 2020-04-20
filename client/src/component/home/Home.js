import React, { Component } from "react";
import "../Connexion/Connexion.css";

class Home extends Component {
  state = {
    toto: 2
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  addition = () => {
    const { toto } = this.state;
    this.setState({ toto: toto + 2 });
  };

  soustrait = () => {
    const { toto } = this.state;
    this.setState({ toto: toto - 2 });
  };

  render() {
    const { toto } = this.state;
    console.log("render");
    if (toto > 10) {
      return <div>Toto n'est plus là</div>;
    }

    return (
      <div>
        Hello
        <div>{toto}</div>
        <button onClick={this.addition}> +2 </button>
        <button onClick={this.soustrait}> -2 </button>
      </div>
    );
  }
}

// function Home() {
//   const position = () => {
//     if (window.innerWidth > window.innerHeight) {
//       // mode paysage OK activez le React
//       // document.getElementById("portrait").style.visibility = "hidden";
//       // document.getElementById("paysage").style.visibility = "visible";
//       console.log("paysage");
//     } else {
//       // mode portrait OK désactivez le React
//       // document.getElementById("portrait").style.visibility = "visible";
//       // document.getElementById("paysage").style.visibility = "hidden";
//       console.log("portrait");
//     }
//   };

//   const touchEcran = () => {};

//   window.onload = position;

//   position();

//   return (
//     <Fragment>
//       <div id="portrait">
//         <p>
//           Pour pouvoir jouer à Ostara veuillez mettre votre téléphone au format
//           paysage
//         </p>
//       </div>
//       <div id="paysage">
//         <div>Logo Ostara</div>
//         <button onClick={touchEcran}>Touchez l'écran</button>
//         <div>Logo Gobelins</div>
//       </div>
//     </Fragment>
//   );
// }

export default Home;
