import React from "react";
import ManetteDesert from "../ManetteDesert/ManetteDesert";
import chargement from "../../video/chargementDesert.mp4";
import { ws, on } from "../../ws";
import {
  VideoAttente,
  GameObstacle,
  MapObstaclePlayer1,
  MapObstaclePlayer2,
  MapObstaclePlayer3,
  MapObstaclePlayer4
} from "./PageAttenteObstacle.styles.js";

class PageAttenteObstacle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // PROD
      client: props.client,
      //  DEV
      // client: 4,
      pierre: props.pierre,
      graine: props.graine,
      fruit: props.fruit,
      finVideo: "",
      finObstacle: false,
      impactFinal: props.choiceObstacle
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
      on(event.data, "finObstacle", (str) => {
        console.log(str);
        this.setState({ finObstacle: true });
      })
    };
  }

  render() {
    // 1
    const {
      client,
      pierre,
      graine,
      fruit,
      finVideo,
      finObstacle,
      impactFinal
    } = this.state;

    if (finObstacle === true) {
      return <ManetteDesert client={client} pierre={pierre} graine={graine} fruit={fruit} impactFinal={impactFinal} />;
    }

    if (finVideo === "endVideo") {
      return (
        <GameObstacle>
          {client === 1 && (
            <MapObstaclePlayer1>
              {/* <CanvasPLayer1 /> */}
            </MapObstaclePlayer1>
          )}
          {client === 2 && (
            <MapObstaclePlayer2>
              {/* <CanvasPLayer2 /> */}
            </MapObstaclePlayer2>
          )}
          {client === 3 && (
            <MapObstaclePlayer3>
              {/* <CanvasPLayer3 /> */}
            </MapObstaclePlayer3>
          )}
          {client === 4 && (
            <MapObstaclePlayer4>
              {/* <CanvasPLayer4 /> */}
            </MapObstaclePlayer4>
          )}
        </GameObstacle>
      )
    }

    return (
      <>
        <VideoAttente id="video" autoPlay muted playsinline>
          <source src={chargement} type="video/mp4"></source>
        </VideoAttente>
      </>
    );
  }
}

export default PageAttenteObstacle;
