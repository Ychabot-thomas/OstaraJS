import styled from "styled-components";
import fondContainer from "../../img/fond_impactRosalie.png";
import crossQuitGame from "../../img/crossQuitGame.png";
import impactRosalie from "../../img/impactRosalie.png";
import crossPopUp from "../../img/crossImpact.png";

export const ContainerImpactFinal = styled.div`
  background-image: url(${fondContainer});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
`;

export const QuitGame = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;
  width: 40px;
  height: 35px;
  background-image: url(${crossQuitGame});
`;

export const PopUpRosalie = styled.div`
  background-image: url(${impactRosalie});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
`;

export const ImpactRosalie = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
  top: 97px;
  left: 42px;
`;

export const QuitPopUp = styled.div`
  width: 15px;
  height: 15px;
  position: relative;
  top: 152px;
  left: 290px;
  background-image: url(${crossPopUp});
  background-size: cover;
`;