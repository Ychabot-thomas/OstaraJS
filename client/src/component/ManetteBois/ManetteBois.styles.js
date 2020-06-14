import styled from "styled-components";
import fondMannetteJoueur1 from "../../img/joueur1_bois.png";
import fondAtoutPlayer from "../../img/fondAtoutPlayer.png"
import fondMannetteJoueur2 from "../../img/joueur2_bois.png";
import fondMannetteJoueur3 from "../../img/joueur3_bois.png";
import fondMannetteJoueur4 from "../../img/joueur4_bois.png";
import button_jump from "../../img/button_jump.png";
import fond from "../../img/inputFond.png";
import card_conseil from "../../img/card_conseil.png";
import card_info from "../../img/card_infos.png";
import map from "../../img/map.png";
import fondPartage from "../../img/fondPartage.png";
import flecheGauche from "../../img/fleche_left.png";
import flecheDroite from "../../img/fleche_right.png";
import receptionRessourceJ1 from "../../img/receptionRessourceJ1.png";
import receptionRessourceJ2 from "../../img/receptionRessourceJ2.png";
import receptionRessourceJ3 from "../../img/receptionRessourceJ3.png";
import receptionRessourceJ4 from "../../img/receptionRessourceJ4.png";
import buttonPlanter from "../../img/logo_planter.png";
import buttonCueillir from "../../img/logo_cueillir.png";
import buttonPluie from "../../img/logo_pluie.png";

export const MannetteContainerJoueur1 = styled.div`
  background-image: url(${fondMannetteJoueur1}); 
  background-size: cover;
  min-height: 100vh;
`;

export const ParametreContainer = styled.div`
  background-image: url(${fondAtoutPlayer});
  background-size: cover;
  position: absolute;
  left: 0;
  top:0;
  min-height: 100vh;
  min-width: 100vw;
  display: block;
  overflow: hidden;
`;

export const MannetteContainerJoueur2 = styled.div`
  background-image: url(${fondMannetteJoueur2}); 
  background-size: cover;
  min-height: 100vh;
`;

export const ContainerCardConseil = styled.div`
  background-image: url(${card_conseil});
  background-size: 85%;
  background-repeat: repeat-x;
  height: 80vh;
  position: relative;
  top: 50px;
  left: 30px;
`;

export const MannetteContainerJoueur3 = styled.div`
  background-image: url(${fondMannetteJoueur3}); 
  background-size: cover;
  min-height: 100vh;
`;

export const ContainerCardInfo = styled.div`
  background-image: url(${card_info});
  background-size: 55%;
  background-repeat: repeat-x;
  height: 80vh;
  position: relative;
  top: 30px;
  left: 30px; 
`;

export const MannetteContainerJoueur4 = styled.div`
  background-image: url(${fondMannetteJoueur4}); 
  background-size: cover;
  min-height: 100vh;
`;

export const ContainerMap = styled.div`
  background-image: url(${map});
  background-size: 102%;
  background-repeat: no-repeat;
  min-height: 80vh;
  margin-top: 10px;
`;

export const ActionContainerJoueur = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 30px;
`;

export const RessourceContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Infini;
  font-size: 30px;
  color: #fff;
  position: relative;
  left: 20px;
`;

export const RessourcePart = styled.div`
  padding-right: 15px;
`;

export const RessourcePicture = styled.img`
  padding-right: 5px;
`;

export const NamePlayer = styled.div`
  font-family: Infini;
  font-weight: 500;
  font-size: 28px;
  color: #EBCAA1;
`;

export const InteractionPlayer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 150px;
  position: relative;
  right: 15px;
`;

export const InteractionPlayerPicture = styled.img`
  width: initial;
  height: fit-content;
`;

export const ControlPlayer = styled.div`
  max-height: 50vh;
`;

export const JoystickContainer = styled.div`
  width: 200px;
  height: 200px;
`;

export const ButtonPlayer = styled.div`
  background-image: url(${button_jump});
  background-repeat: no-repeat;
  width: 22%;
  height: 188px;
  position: absolute;
  right: 25px;
  bottom: 33px;
`;

export const InputX = styled.input`
  display: none;
`;

export const InputY = styled.input`
  display: none;
`;

export const TitleSettings = styled.h1`
  font-family: "Infini", sans-serif;
  color: #D4A16E;
  font-weight: 300;
  text-align: center;
  margin-top: 15px;
`;

export const ContainerSettingsVolume = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export const ContainerSettingsVolumeTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  bottom: 5px;
`;

export const VolumeTitleSettings = styled.h2`
  font-family: "Infini", sans-serif;
  color: #D4A16E;
  text-align: right;
`;

export const ContainerSettingsVolumeCursor = styled.div`
  width: 270px
`;

export const ContainerSettings = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

export const ContainerButtonSettings = styled.div`
  width: 30%;
  height: 40px;
  background-image: url(${fond});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
`;

export const InputSettings = styled.input`
  font-family: "Infini", sans-serif;
  font-size: 20px;
  color: #f8d5b1;
  position: relative;
  top: 3px;
  background: transparent;
  border: none;
`;

export const PartageContainer = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${fondPartage});
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
`;

export const PartagePlayer = styled.h1`
  position: absolute;
  left: 50%;
  font-family: Infini;
  font-weight: 500;
  color: #EBCAA1;
`;

export const ContainerButtonSubmitPartage = styled.div`
  width: 30%;
  height: 40px;
  background-image: url(${fond});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  position: absolute;
  bottom: 25px;
  right: 20px;
`;

export const ButtonSubmitPartage = styled.input`
  font-family: "Infini", sans-serif;
  font-size: 20px;
  color: #f8d5b1;
  position: relative;
  top: 3px;
  background: transparent;
  border: none;
`;

export const RessourceContainerPartage = styled.div`
  position: relative;
  left: 25px;
  top: 50px;
`;

export const ControleRessourcePartage = styled.div`
  display: flex;
  justify-content: space-around;
  width: 35%;
  margin-bottom: 20px;
`;

export const ButtonMoinsPartage = styled.div`
  background-image: url(${flecheGauche});
  height: 50px;
  width: 30px;
  background-repeat: no-repeat;
`;

export const ButtonPlusPartage = styled.div`
  background-image: url(${flecheDroite});
  height: 50px;
  width: 30px;
  background-repeat: no-repeat;
`;

export const ImgRessource = styled.img`
`;

export const NbRessource = styled.div`
  background-color: rgba(92,92,92,0.6);
  border-radius: 5px;
  color: #F8D5B1;
  font-family: Infini;
  font-size: 34px;
  width: 30px;
  text-align: center;
`;

export const RessourceNumber = styled.div`
  background-color: #5C5C5C;
`;

export const ContainerPlayerPartage = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  position: absolute;
  top: 170px;
  right: 65px;
`;

export const ChoosePlayer = styled.div`
  position: relative;
  bottom: 90px;
  left: 20px;
`;

export const ImgPlayer = styled.img`
  width: 60%;
`;

export const AfficheRessourceRecuJ1 = styled.div`
    background-image: url(${receptionRessourceJ1});
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
    top: 0;
`;

export const AfficheRessourceRecuJ2 = styled.div`
    background-image: url(${receptionRessourceJ2});
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
    top: 0;
`;

export const AfficheRessourceRecuJ3 = styled.div`
    background-image: url(${receptionRessourceJ3});
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
    top: 0;
`;

export const AfficheRessourceRecuJ4 = styled.div`
    background-image: url(${receptionRessourceJ4});
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
    top: 0;
`;

export const CrossCodeRessource = styled.img`
  position: relative;
  top: 50px;
  left: 500px;
  width: 5%;
`;

export const TitleRessource = styled.h2`
  text-transform: uppercase;
  font-family: Infini;
  color: #D4A16E;
  font-weight: 300;
  text-transform: uppercase;
  font-family: Infini;
  color: #D4A16E;
  font-weight: 100;
  position: relative;
  left: 250px;
  top: 50px;
  width: 170px;
  text-align: center;
`;

export const ContainerRessourceRecu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  position: relative;
  top: 110px;
  left: 180px;
`;

export const ContainerConcertation = styled.div`
  display: block;
  background-image: url(${fondAtoutPlayer});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
`;

export const ContainerChoice = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Choice = styled.img`
  width: 40%;
  position: relative;
  top: 25px;
`;

export const TitleConcertation = styled.h1`
  font-family: "Infini", sans-serif;
  color: #D4A16E;
  font-size: 20px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
`;

export const SpanTitleConcertation = styled.span`
  ::before,
  ::after {
    content: "";
    width: 110px;
    height: 2px;
    background-color: #D4A16E;
    position: absolute;
    top: 50%;
  }
  ::before {
    left: -150px;
  }

  ::after {
    margin-left: 50px;
  }
`;

export const ContainerPlayer1 = styled.div`
  display: flex;
`;

export const ContainerPlayer2 = styled.div`
  display: flex;
`;

export const ContainerPlayer3 = styled.div`
  display: flex;
`;

export const ContainerPlayer4 = styled.div`
  display: flex;
`;

export const ButtonMoinsPlayer = styled.div`
  background-image: url(${flecheGauche});
  height: 50px;
  width: 30px;
  background-repeat: no-repeat;
  position: relative;
  top: 110px
`;

export const ButtonPlusPlayer = styled.div`
  background-image: url(${flecheDroite});
  height: 50px;
  width: 30px;
  background-repeat: no-repeat;
  position: relative;
  top: 110px
`;

export const ContainerPlanter = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  min-height: 100vh;
  min-width: 100vw;
`;

export const IconPlanter = styled.div`
  background-image: url(${buttonPlanter});
  position: relative;
  top: 110px;
  left: 400px;
  width: 130px;
  height: 110px;
`;

export const ContainerRamasser = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  min-height: 100vh;
  min-width: 100vw;
`;

export const IconRamasser = styled.div`
  background-image: url(${buttonCueillir});
  position: relative;
  top: 110px;
  left: 400px;
  width: 130px;
  height: 110px;
`;

export const ContainerPluie = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  min-height: 100vh;
  min-width: 100vw;
`;

export const IconPluie = styled.div`
  background-image: url(${buttonPluie});
  position: relative;
  top: 110px;
  left: 400px;
  width: 130px;
  height: 110px;
`;