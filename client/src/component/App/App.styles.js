import styled from "styled-components";
import fondPortrait from "../../img/fondPortrait.png";
import fondPaysage from "../../img/fondPaysage.png";

export const ContainerPortrait = styled.div`
  background-image: url(${fondPortrait});
  background-size: cover;
  min-height: 100vh;
`;

export const PicturePortrait = styled.img`
  width: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ContainerPaysage = styled.div`
  background-image: url(${fondPaysage});
  background-size: cover;
  min-height: 100vh;
`;
