import React, { Component } from "react";
import "./App.css";
import Membre from "./component/Membre";
import Button from "./component/Button";

const famille = {
  membre1: {
    nom: "Alexandra",
    age: 47
  },
  membre2: {
    nom: "Stéphane",
    age: 50
  },
  membre3: {
    nom: "Yann",
    age: 21
  },
  membre4: {
    nom: "Lucas",
    age: 16
  },
  membre5: {
    nom: "Emma",
    age: 13
  }
};

class App extends Component {
  state = {
    famille,
    isShow: false
  };

  handleClick = num => {
    const famille = { ...this.state.famille };
    famille.membre1.age += num;
    this.setState({ famille });
  };

  handleChange = (event, id) => {
    const famille = { ...this.state.famille };
    const nom = event.target.value;
    famille[id].nom = nom;
    this.setState({ famille });
  };

  hideName = id => {
    const famille = { ...this.state.famille };
    famille[id].nom = "X";
    this.setState({ famille });
  };

  handleShowDescription = () => {
    const isShow = !this.state.isShow;
    this.setState({ isShow });
  };

  render() {
    const { titre } = this.props;
    const { famille, isShow } = this.state;

    let description = null;

    if (isShow) {
      description = <strong>Je suis la petite dernière.</strong>;
    }

    const liste = Object.keys(famille).map(membre => (
      <Membre
        key={membre}
        handleChange={event => this.handleChange(event, membre)}
        hideName={() => this.hideName(membre)}
        age={famille[membre].age}
        nom={famille[membre].nom}
      />
    ));
    // console.log(liste);
    return (
      <div className="App">
        <h1>{titre}</h1>
        {liste}
        {/* <Membre nom={famille.membre5.nom} age={famille.membre5.age}>
          {description}
          <button onClick={this.handleShowDescription}>
            {isShow ? "Cacher" : "Montrer"}
          </button>
        </Membre> */}
        {/* <Button vieillir={() => this.handleClick(2)} /> */}
      </div>
    );
  }
}

export default App;
