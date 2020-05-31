import styled from "styled-components";
import fondMannetteJoueur1 from "../../img/joueur1.png";
import fondMannetteJoueur2 from "../../img/joueur2.png";
import fondMannetteJoueur3 from "../../img/joueur3.png";
import fondMannetteJoueur4 from "../../img/joueur4.png";

export const MannetteContainerJoueur1 = styled.div`
  background-image: url(${fondMannetteJoueur1}); 
  background-size: cover;
  min-height: 100vh;
`;

export const MannetteContainerJoueur2 = styled.div`
  background-image: url(${fondMannetteJoueur2}); 
  background-size: cover;
  min-height: 100vh;
`;

export const MannetteContainerJoueur3 = styled.div`
  background-image: url(${fondMannetteJoueur3}); 
  background-size: cover;
  min-height: 100vh;
`;

export const MannetteContainerJoueur4 = styled.div`
  background-image: url(${fondMannetteJoueur4}); 
  background-size: cover;
  min-height: 100vh;
`;

export const ActionContainerJoueur = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 30px;
`;

export const RessourceContainer = styled.div``;

export const NamePlayer = styled.div`
  font-family: Infini;
  font-weight: 500;
  font-size: 28px;
  color: #D4A16E;
`;

export const InteractionPlayer = styled.div`

`;

export const JoystickContainer = styled.div`
  width: 200px;
  height: 200px;
`;

export const InputX = styled.input`
  display: none;
`;

export const InputY = styled.input`
  display: none;
`;
