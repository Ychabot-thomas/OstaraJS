import React from "react";
import ManetteBois from "../ManetteBois/ManetteBois";
import chargement from "../../video/chargement.mp4";
import { ws, on } from "../../ws";
import { VideoAttente } from "./PageAttente.styles.js";

class PageAttente extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      client: props.idClient,
      finVideo: ""
    }
  }

  componentDidMount() {
    // 2
    // this.setState({ client: this.props.idClient });
    ws.onmessage = (event) => {
      on(event.data, "videoEnd", (str) => {
        console.log(str.desactive);
        this.setState({ finVideo: str.desactive });
      });
    };
  }

  render() {
    // 1
    const { client, finVideo } = this.state;

    if (finVideo === "endVideo") {
      return <ManetteBois client={client} />;
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
