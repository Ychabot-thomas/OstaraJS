import styled from "styled-components";
import fond from "../../img/fondAtoutPlayer.png";
import canvasPlayer1 from "../../img/fondCanvasPlayer1.png";
import canvasPlayer2 from "../../img/fondCanvasPlayer2.png";
import canvasPlayer3 from "../../img/fondCanvasPlayer3.png";
import canvasPlayer4 from "../../img/fondCanvasPlayer4.png";

export const VideoAttente = styled.video`
  max-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

export const GameObstacle = styled.div`
  background-image: url(${fond});
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MapObstaclePlayer1 = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${canvasPlayer1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const MapObstaclePlayer2 = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${canvasPlayer2});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  `;

export const MapObstaclePlayer3 = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${canvasPlayer3});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  `;

export const MapObstaclePlayer4 = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${canvasPlayer4});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  `;
