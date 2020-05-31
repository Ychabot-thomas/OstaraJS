import React from "react";
import ManetteBois from "../ManetteBois/ManetteBois";
import chargement from "../../video/chargement.mp4";
import { ws, on } from "../../ws";
import { VideoAttente } from "./PageAttente.styles.js";

class PageAttente extends React.Component {
  state = {
    finVideo: "",
  };

  componentDidMount() {
    ws.onmessage = (event) => {
      on(event.data, "videoEnd", (str) => {
        console.log(str.desactive);
        this.setState({ finVideo: str.desactive });
      });
    };
  }

  render() {
    const { finVideo } = this.state;

    if (finVideo === "endVideo") {
      return <ManetteBois />;
    }

    return (
      <>
        <VideoAttente id="video" autoPlay muted>
          <source src={chargement} type="video/mp4"></source>
        </VideoAttente>
      </>
    );
  }
}

export default PageAttente;
