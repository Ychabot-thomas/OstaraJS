import React from "react";
import {
  MannetteContainerJoueur1,
  ParametreContainer,
  MannetteContainerJoueur2,
  MannetteContainerJoueur3,
  MannetteContainerJoueur4,
  ActionContainerJoueur,
  RessourceContainer,
  RessourcePart,
  RessourcePicture,
  NamePlayer,
  InteractionPlayer,
  InteractionPlayerPicture,
  ControlPlayer,
  JoystickContainer,
  ButtonPlayer,
  TitleSettings,
  ContainerSettingsVolume,
  ContainerSettingsVolumeTitle,
  VolumeTitleSettings,
  ContainerSettingsVolumeCursor,
  ContainerSettings,
  ContainerButtonSettings,
  InputSettings,
  ContainerCardConseil,
  ContainerCardInfo,
  ContainerMap,
  PartageContainer,
  PartagePlayer,
  RessourceContainerPartage,
  ControleRessourcePartage,
  ButtonMoinsPartage,
  ButtonPlusPartage,
  ImgRessource,
  NbRessource,
  ContainerPlayerPartage,
  ChoosePlayer,
  ContainerButtonSubmitPartage,
  ButtonSubmitPartage,
  AfficheRessourceRecuJ1,
  AfficheRessourceRecuJ2,
  AfficheRessourceRecuJ3,
  AfficheRessourceRecuJ4,
  CrossCodeRessource,
  TitleRessource,
  ContainerRessourceRecu,
  ContainerConcertation,
  ContainerChoice,
  Choice
} from "./ManetteBois.styles";
import { CrossCode } from "../Connexion/Connexion.styles";
import { JoyStick } from "./joy";
import { ws, send, on } from "../../ws";
import logo_pierre from "../../img/logo_pierre.png";
import logo_graine from "../../img/logo_graine.png";
import logo_fruit from "../../img/logo_fruit.png";
import logo_pierrePartage from "../../img/logo_pierrePartage.png";
import logo_grainePartage from "../../img/logo_grainePartage.png";
import logo_fruitPartage from "../../img/logo_fruitPartage.png";
import logo_partage from "../../img/logo_partage_ressource.png";
import logo_parametre from "../../img/logo_parametre.png";
import logo_conseil from "../../img/logo_conseils.png";
import logo_information from "../../img/logo_informations.png";
import logo_map from "../../img/logo_map.png";
import croix from "../../img/croix.png";
import choiceVoiture from "../../img/choiceVoiture.png";
import choiceRosalie from "../../img/choiceRosalie.png";
import "./ManetteBois.css";
// import { withStyles } from "@material-ui/core/styles";
// import Slider from "@material-ui/core/Slider";

class Manette extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      X: 0,
      Y: 0,
      pierre: 6,
      graine: 6,
      fruit: 6,
      partagePierre: 0,
      partageGraine: 0,
      partageFruit: 0,
      receptionPierre: 0,
      receptionGraine: 0,
      receptionFruit: 0,
      // PROD
      // client: props.client,
      // DEV
      client: 1,
      nameSendRessource: ""
    };
  }

  componentDidMount() {
    // const PrettoSlider = withStyles({
    //   root: {
    //     color: "#467014",
    //     height: 8
    //   },
    //   thumb: {
    //     height: 24,
    //     width: 24,
    //     backgroundColor: "#D7A870",
    //     border: "2px solid #66350F",
    //     marginTop: -8,
    //     marginLeft: -12,
    //     "&:focus, &:hover, &$active": {
    //       boxShadow: "inherit"
    //     }
    //   },
    //   track: {
    //     height: 8,
    //     borderRadius: 4
    //   },
    //   rail: {
    //     height: 8,
    //     borderRadius: 4
    //   }
    // })(Slider);

    const Joy = new JoyStick("joy");

    const joystick = () => {
      // X
      let valueX = Joy.GetX();

      // Z
      let valueY = Joy.GetY();

      if (valueX !== this.state.X || valueY !== this.state.Y) {
        // send("move", { x: valueX, y: valueY });
      }

      // this.setState({
      //   client: this.props.client
      // });

    };

    setInterval(joystick, 100);

    ws.onmessage = (event) => {
      on(event.data, "partageRessource", (str) => {
        //joueur 1 réception
        if (str.partageJoueur === this.state.client) {
          console.log(str);
          this.setState(
            {
              nameSendRessource: str.sendPlayer,
              receptionPierre: str.pierre,
              receptionGraine: str.graine,
              receptionFruit: str.fruit
            }
          );

          let reception = document.getElementById("receptionRessource");
          reception.style.display = "block";
        }

        // joueur 2 réception
        if (str.partageJoueur === this.state.client) {
          this.setState(
            {
              receptionPierre: str.pierre,
              receptionGraine: str.graine,
              receptionFruit: str.fruit
            }
          );
          let reception = document.getElementById("receptionRessource");
          reception.style.display = "block";
        }

        // joueur 3 réception
        if (str.partageJoueur === this.state.client) {
          this.setState(
            {
              receptionPierre: str.pierre,
              receptionGraine: str.graine,
              receptionFruit: str.fruit
            }
          );
          let reception = document.getElementById("receptionRessource");
          reception.style.display = "block";
        }

        // joueur 4 réception
        if (str.partageJoueur === this.state.client) {
          this.setState(
            {
              receptionPierre: str.pierre,
              receptionGraine: str.graine,
              receptionFruit: str.fruit
            }
          );
          let reception = document.getElementById("receptionRessource");
          reception.style.display = "block";
        }
      })
    };
  }

  sauter = () => {
    send("jump", { jump: true });
  };

  parametres = () => {
    let parametres = document.getElementById("atouts");
    parametres.style.display = "block";
  }

  conseils = () => {
    let parametres = document.getElementById("atouts");
    parametres.style.display = "block";
  }

  informations = () => {
    let parametres = document.getElementById("atouts");
    parametres.style.display = "block";
  }

  map = () => {
    let parametres = document.getElementById("atouts");
    parametres.style.display = "block";
  }

  partage = () => {
    console.log("partage");
    let partage = document.getElementById("partage");
    partage.style.display = "block";
    this.setState({
      partagePierre: this.state.pierre,
      partageGraine: this.state.graine,
      partageFruit: this.state.fruit,
    })
  }

  partageRessource = () => {
    this.setState({
      pierre: this.state.pierre - this.state.partagePierre,
      graine: this.state.graine - this.state.partageGraine,
      fruit: this.state.fruit - this.state.partageFruit
    })
    send("partageRessource",
      {
        sendPlayer: this.state.client,
        pierre: this.state.partagePierre,
        graine: this.state.partageGraine,
        fruit: this.state.partageFruit,
        // partageJoueur: this.state.partageJoueur
      }
    );
    // console.log("nomJoueur : " + nomJoueur);
  }

  deleteDiv = () => {
    document.getElementById("atouts").style.display = "none";
    document.getElementById("partage").style.display = "none";
  };

  closePartageDiv = () => {
    document.getElementById("receptionRessource").style.display = "none";
    this.setState(
      {
        pierre: this.state.pierre + this.state.receptionPierre,
        graine: this.state.graine + this.state.receptionGraine,
        fruit: this.state.fruit + this.state.receptionFruit,
      }
    )
  };

  choiceVoiture = () => {

  }

  choiceRosalie = () => {

  }

  render() {
    // Prod
    // let idJoueur = this.state.client;

    // Dev
    let idJoueur = 1;

    if (idJoueur === 1) {
      return (
        <>
          <MannetteContainerJoueur1>
            <ActionContainerJoueur>
              <RessourceContainer>
                <RessourcePart>
                  <RessourcePicture src={logo_pierre} />
                  {this.state.pierre}
                </RessourcePart>
                <RessourcePart>
                  <RessourcePicture src={logo_graine} />
                  {this.state.graine}
                </RessourcePart>
                <RessourcePart>
                  <RessourcePicture src={logo_fruit} />
                  {this.state.fruit}
                </RessourcePart>
              </RessourceContainer>
              <NamePlayer>SANDR</NamePlayer>
              <InteractionPlayer>
                <InteractionPlayerPicture src={logo_partage} onClick={this.partage} />
                <InteractionPlayerPicture src={logo_parametre} onClick={this.parametres} />
              </InteractionPlayer>
            </ActionContainerJoueur>
            <ControlPlayer>
              <JoystickContainer id="joy"></JoystickContainer>
              <ButtonPlayer onClick={this.sauter}></ButtonPlayer>
            </ControlPlayer>
            <ParametreContainer id="atouts">
              <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
              <TitleSettings>PARAMÈTRES</TitleSettings>
              <ContainerSettingsVolume>
                <ContainerSettingsVolumeTitle>
                  <VolumeTitleSettings>musique</VolumeTitleSettings>
                  <VolumeTitleSettings>voix</VolumeTitleSettings>
                </ContainerSettingsVolumeTitle>
                <ContainerSettingsVolumeCursor>
                  {/* <PrettoSlider />
                  <PrettoSlider /> */}
                </ContainerSettingsVolumeCursor>
              </ContainerSettingsVolume>
              <ContainerSettings>
                <ContainerButtonSettings>
                  <InputSettings type="button" value="Quitter" />
                </ContainerButtonSettings>
                <ContainerButtonSettings>
                  <InputSettings type="button" value="Sauvegarder" />
                </ContainerButtonSettings>
              </ContainerSettings>
            </ParametreContainer>
            <PartageContainer id="partage">
              <ActionContainerJoueur>
                <RessourceContainer>
                  <RessourcePart>
                    <RessourcePicture src={logo_pierre} />
                    {this.state.pierre}
                  </RessourcePart>
                  <RessourcePart>
                    <RessourcePicture src={logo_graine} />
                    {this.state.graine}
                  </RessourcePart>
                  <RessourcePart>
                    <RessourcePicture src={logo_fruit} />
                    {this.state.fruit}
                  </RessourcePart>
                </RessourceContainer>
                <PartagePlayer>PARTAGE</PartagePlayer>
                <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
              </ActionContainerJoueur>
              <RessourceContainerPartage>
                <ControleRessourcePartage>
                  <ButtonMoinsPartage onClick={() => { this.setState({ partagePierre: this.state.partagePierre - 1 }) }}></ButtonMoinsPartage>
                  <ImgRessource src={logo_pierrePartage} />
                  <NbRessource>{this.state.partagePierre}</NbRessource>
                  <ButtonPlusPartage onClick={() => { this.setState({ partagePierre: this.state.partagePierre + 1 }) }}></ButtonPlusPartage>
                </ControleRessourcePartage>
                <ControleRessourcePartage>
                  <ButtonMoinsPartage onClick={() => { this.setState({ partageGraine: this.state.partageGraine - 1 }) }}></ButtonMoinsPartage>
                  <ImgRessource src={logo_grainePartage} />
                  <NbRessource>{this.state.partageGraine}</NbRessource>
                  <ButtonPlusPartage onClick={() => { this.setState({ partageGraine: this.state.partageGraine + 1 }) }}></ButtonPlusPartage>
                </ControleRessourcePartage>
                <ControleRessourcePartage>
                  <ButtonMoinsPartage onClick={() => { this.setState({ partageFruit: this.state.partageFruit - 1 }) }}></ButtonMoinsPartage>
                  <ImgRessource src={logo_fruitPartage} />
                  <NbRessource>{this.state.partageFruit}</NbRessource>
                  <ButtonPlusPartage onClick={() => { this.setState({ partageFruit: this.state.partageFruit + 1 }) }}></ButtonPlusPartage>
                </ControleRessourcePartage>
              </RessourceContainerPartage>
              <ContainerPlayerPartage>
                <ButtonMoinsPartage></ButtonMoinsPartage>
                <ChoosePlayer></ChoosePlayer>
                <ButtonPlusPartage></ButtonPlusPartage>
              </ContainerPlayerPartage>
              <ContainerButtonSubmitPartage>
                <ButtonSubmitPartage type="button" value="Envoyer" onClick={this.partageRessource} />
              </ContainerButtonSubmitPartage>
            </PartageContainer>
            <AfficheRessourceRecuJ1 id="receptionRessource">
              <CrossCodeRessource id="croix" src={croix} onClick={this.closePartageDiv} />
              <TitleRessource>de la part de <strong>{this.state.nameSendRessource}</strong></TitleRessource>
              <ContainerRessourceRecu>
                <ImgRessource src={logo_pierrePartage} />
                <NbRessource>{this.state.receptionPierre}</NbRessource>
                <ImgRessource src={logo_grainePartage} />
                <NbRessource>{this.state.receptionGraine}</NbRessource>
                <ImgRessource src={logo_fruitPartage} />
                <NbRessource>{this.state.receptionFruit}</NbRessource>
              </ContainerRessourceRecu>
            </AfficheRessourceRecuJ1>
            <ContainerConcertation>
              <TitleSettings>CONCERTEZ-VOUS</TitleSettings>
              <ContainerChoice>
                <Choice src={choiceVoiture} onClick={this.choiceVoiture} />
                <Choice src={choiceRosalie} onClick={this.choiceRosalie} />
              </ContainerChoice>
            </ContainerConcertation>
          </MannetteContainerJoueur1>
        </>
      );
    }

    if (idJoueur === 2) {
      return (
        <>
          <MannetteContainerJoueur2>
            <ActionContainerJoueur>
              <RessourceContainer>
                <RessourcePart>
                  <RessourcePicture src={logo_pierre} />
                  {this.state.pierre}
                </RessourcePart>
                <RessourcePart>
                  <RessourcePicture src={logo_graine} />
                  {this.state.graine}
                </RessourcePart>
                <RessourcePart>
                  <RessourcePicture src={logo_fruit} />
                  {this.state.fruit}
                </RessourcePart>
              </RessourceContainer>
              <NamePlayer>DÉMETER</NamePlayer>
              <InteractionPlayer>
                <InteractionPlayerPicture src={logo_partage} onClick={this.partage} />
                <InteractionPlayerPicture src={logo_conseil} onClick={this.conseils} />
              </InteractionPlayer>
            </ActionContainerJoueur>
            <ControlPlayer>
              <JoystickContainer id="joy"></JoystickContainer>
              <ButtonPlayer onClick={this.sauter}></ButtonPlayer>
            </ControlPlayer>
            <ParametreContainer id="atouts">
              <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
              <ContainerCardConseil></ContainerCardConseil>
            </ParametreContainer>
            <PartageContainer id="partage">
              <ActionContainerJoueur>
                <RessourceContainer>
                  <RessourcePart>
                    <RessourcePicture src={logo_pierre} />
                    {this.state.pierre}
                  </RessourcePart>
                  <RessourcePart>
                    <RessourcePicture src={logo_graine} />
                    {this.state.graine}
                  </RessourcePart>
                  <RessourcePart>
                    <RessourcePicture src={logo_fruit} />
                    {this.state.fruit}
                  </RessourcePart>
                </RessourceContainer>
                <PartagePlayer>PARTAGE</PartagePlayer>
                <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
              </ActionContainerJoueur>
              <RessourceContainerPartage>
                <ControleRessourcePartage>
                  <ButtonMoinsPartage onClick={() => { this.setState({ partagePierre: this.state.partagePierre - 1 }) }}></ButtonMoinsPartage>
                  <ImgRessource src={logo_pierrePartage} />
                  <NbRessource>{this.state.partagePierre}</NbRessource>
                  <ButtonPlusPartage onClick={() => { this.setState({ partagePierre: this.state.partagePierre + 1 }) }}></ButtonPlusPartage>
                </ControleRessourcePartage>
                <ControleRessourcePartage>
                  <ButtonMoinsPartage onClick={() => { this.setState({ partageGraine: this.state.partageGraine - 1 }) }}></ButtonMoinsPartage>
                  <ImgRessource src={logo_grainePartage} />
                  <NbRessource>{this.state.partageGraine}</NbRessource>
                  <ButtonPlusPartage onClick={() => { this.setState({ partageGraine: this.state.partageGraine + 1 }) }}></ButtonPlusPartage>
                </ControleRessourcePartage>
                <ControleRessourcePartage>
                  <ButtonMoinsPartage onClick={() => { this.setState({ partageFruit: this.state.partageFruit - 1 }) }}></ButtonMoinsPartage>
                  <ImgRessource src={logo_fruitPartage} />
                  <NbRessource>{this.state.partageFruit}</NbRessource>
                  <ButtonPlusPartage onClick={() => { this.setState({ partageFruit: this.state.partageFruit + 1 }) }}></ButtonPlusPartage>
                </ControleRessourcePartage>
              </RessourceContainerPartage>
              <ContainerPlayerPartage>
                <ButtonMoinsPartage></ButtonMoinsPartage>
                <ChoosePlayer></ChoosePlayer>
                <ButtonPlusPartage></ButtonPlusPartage>
              </ContainerPlayerPartage>
              <ContainerButtonSubmitPartage>
                <ButtonSubmitPartage type="button" value="Envoyer" onClick={this.partageRessource} />
              </ContainerButtonSubmitPartage>
            </PartageContainer>
            <AfficheRessourceRecuJ2 id="receptionRessource">
              <CrossCodeRessource id="croix" src={croix} onClick={this.closePartageDiv} />
              <TitleRessource>de la part de <strong>{this.state.nameSendRessource}</strong></TitleRessource>
              <ContainerRessourceRecu>
                <ImgRessource src={logo_pierrePartage} />
                <NbRessource>{this.state.receptionPierre}</NbRessource>
                <ImgRessource src={logo_grainePartage} />
                <NbRessource>{this.state.receptionGraine}</NbRessource>
                <ImgRessource src={logo_fruitPartage} />
                <NbRessource>{this.state.receptionFruit}</NbRessource>
              </ContainerRessourceRecu>
            </AfficheRessourceRecuJ2>
            <ContainerConcertation>

            </ContainerConcertation>
          </MannetteContainerJoueur2>
        </>
      );
    }

    if (idJoueur === 3) {
      return (
        <>
          <MannetteContainerJoueur3>
            <ActionContainerJoueur>
              <RessourceContainer>
                <RessourcePart>
                  <RessourcePicture src={logo_pierre} />
                  {this.state.pierre}
                </RessourcePart>
                <RessourcePart>
                  <RessourcePicture src={logo_graine} />
                  {this.state.graine}
                </RessourcePart>
                <RessourcePart>
                  <RessourcePicture src={logo_fruit} />
                  {this.state.fruit}
                </RessourcePart>
              </RessourceContainer>
              <NamePlayer>IÀN</NamePlayer>
              <InteractionPlayer>
                <InteractionPlayerPicture src={logo_partage} onClick={this.partage} />
                <InteractionPlayerPicture src={logo_information} onClick={this.informations} />
              </InteractionPlayer>
            </ActionContainerJoueur>
            <ControlPlayer>
              <JoystickContainer id="joy"></JoystickContainer>
              <ButtonPlayer onClick={this.sauter}></ButtonPlayer>
            </ControlPlayer>
            <ParametreContainer id="atouts">
              <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
              <ContainerCardInfo></ContainerCardInfo>
            </ParametreContainer>
            <PartageContainer id="partage">
              <ActionContainerJoueur>
                <RessourceContainer>
                  <RessourcePart>
                    <RessourcePicture src={logo_pierre} />
                    {this.state.pierre}
                  </RessourcePart>
                  <RessourcePart>
                    <RessourcePicture src={logo_graine} />
                    {this.state.graine}
                  </RessourcePart>
                  <RessourcePart>
                    <RessourcePicture src={logo_fruit} />
                    {this.state.fruit}
                  </RessourcePart>
                </RessourceContainer>
                <PartagePlayer>PARTAGE</PartagePlayer>
                <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
              </ActionContainerJoueur>
              <RessourceContainerPartage>
                <ControleRessourcePartage>
                  <ButtonMoinsPartage onClick={() => { this.setState({ partagePierre: this.state.partagePierre - 1 }) }}></ButtonMoinsPartage>
                  <ImgRessource src={logo_pierrePartage} />
                  <NbRessource>{this.state.partagePierre}</NbRessource>
                  <ButtonPlusPartage onClick={() => { this.setState({ partagePierre: this.state.partagePierre + 1 }) }}></ButtonPlusPartage>
                </ControleRessourcePartage>
                <ControleRessourcePartage>
                  <ButtonMoinsPartage onClick={() => { this.setState({ partageGraine: this.state.partageGraine - 1 }) }}></ButtonMoinsPartage>
                  <ImgRessource src={logo_grainePartage} />
                  <NbRessource>{this.state.partageGraine}</NbRessource>
                  <ButtonPlusPartage onClick={() => { this.setState({ partageGraine: this.state.partageGraine + 1 }) }}></ButtonPlusPartage>
                </ControleRessourcePartage>
                <ControleRessourcePartage>
                  <ButtonMoinsPartage onClick={() => { this.setState({ partageFruit: this.state.partageFruit - 1 }) }}></ButtonMoinsPartage>
                  <ImgRessource src={logo_fruitPartage} />
                  <NbRessource>{this.state.partageFruit}</NbRessource>
                  <ButtonPlusPartage onClick={() => { this.setState({ partageFruit: this.state.partageFruit + 1 }) }}></ButtonPlusPartage>
                </ControleRessourcePartage>
              </RessourceContainerPartage>
              <ContainerPlayerPartage>
                <ButtonMoinsPartage></ButtonMoinsPartage>
                <ChoosePlayer></ChoosePlayer>
                <ButtonPlusPartage></ButtonPlusPartage>
              </ContainerPlayerPartage>
              <ContainerButtonSubmitPartage>
                <ButtonSubmitPartage type="button" value="Envoyer" onClick={this.partageRessource} />
              </ContainerButtonSubmitPartage>
            </PartageContainer>
            <AfficheRessourceRecuJ3 id="receptionRessource">
              <CrossCodeRessource id="croix" src={croix} onClick={this.closePartageDiv} />
              <TitleRessource>de la part de <strong>{this.state.nameSendRessource}</strong></TitleRessource>
              <ContainerRessourceRecu>
                <ImgRessource src={logo_pierrePartage} />
                <NbRessource>{this.state.receptionPierre}</NbRessource>
                <ImgRessource src={logo_grainePartage} />
                <NbRessource>{this.state.receptionGraine}</NbRessource>
                <ImgRessource src={logo_fruitPartage} />
                <NbRessource>{this.state.receptionFruit}</NbRessource>
              </ContainerRessourceRecu>
            </AfficheRessourceRecuJ3>
            <ContainerConcertation>

            </ContainerConcertation>
          </MannetteContainerJoueur3>
        </>
      );
    }

    if (idJoueur === 4) {
      return (
        <>
          <MannetteContainerJoueur4>
            <ActionContainerJoueur>
              <RessourceContainer>
                <RessourcePart>
                  <RessourcePicture src={logo_pierre} />
                  {this.state.pierre}
                </RessourcePart>
                <RessourcePart>
                  <RessourcePicture src={logo_graine} />
                  {this.state.graine}
                </RessourcePart>
                <RessourcePart>
                  <RessourcePicture src={logo_fruit} />
                  {this.state.fruit}
                </RessourcePart>
              </RessourceContainer>
              <NamePlayer>SEREN</NamePlayer>
              <InteractionPlayer>
                <InteractionPlayerPicture src={logo_partage} onClick={this.partage} />
                <InteractionPlayerPicture src={logo_map} onClick={this.map} />
              </InteractionPlayer>
            </ActionContainerJoueur>
            <ControlPlayer>
              <JoystickContainer id="joy"></JoystickContainer>
              <ButtonPlayer onClick={this.sauter}></ButtonPlayer>
            </ControlPlayer>
            <ParametreContainer id="atouts">
              <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
              <TitleSettings>MAP</TitleSettings>
              <ContainerMap></ContainerMap>
            </ParametreContainer>
            <PartageContainer id="partage">
              <ActionContainerJoueur>
                <RessourceContainer>
                  <RessourcePart>
                    <RessourcePicture src={logo_pierre} />
                    {this.state.pierre}
                  </RessourcePart>
                  <RessourcePart>
                    <RessourcePicture src={logo_graine} />
                    {this.state.graine}
                  </RessourcePart>
                  <RessourcePart>
                    <RessourcePicture src={logo_fruit} />
                    {this.state.fruit}
                  </RessourcePart>
                </RessourceContainer>
                <PartagePlayer>PARTAGE</PartagePlayer>
                <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
              </ActionContainerJoueur>
              <RessourceContainerPartage>
                <ControleRessourcePartage>
                  <ButtonMoinsPartage onClick={() => { this.setState({ partagePierre: this.state.partagePierre - 1 }) }}></ButtonMoinsPartage>
                  <ImgRessource src={logo_pierrePartage} />
                  <NbRessource>{this.state.partagePierre}</NbRessource>
                  <ButtonPlusPartage onClick={() => { this.setState({ partagePierre: this.state.partagePierre + 1 }) }}></ButtonPlusPartage>
                </ControleRessourcePartage>
                <ControleRessourcePartage>
                  <ButtonMoinsPartage onClick={() => { this.setState({ partageGraine: this.state.partageGraine - 1 }) }}></ButtonMoinsPartage>
                  <ImgRessource src={logo_grainePartage} />
                  <NbRessource>{this.state.partageGraine}</NbRessource>
                  <ButtonPlusPartage onClick={() => { this.setState({ partageGraine: this.state.partageGraine + 1 }) }}></ButtonPlusPartage>
                </ControleRessourcePartage>
                <ControleRessourcePartage>
                  <ButtonMoinsPartage onClick={() => { this.setState({ partageFruit: this.state.partageFruit - 1 }) }}></ButtonMoinsPartage>
                  <ImgRessource src={logo_fruitPartage} />
                  <NbRessource>{this.state.partageFruit}</NbRessource>
                  <ButtonPlusPartage onClick={() => { this.setState({ partageFruit: this.state.partageFruit + 1 }) }}></ButtonPlusPartage>
                </ControleRessourcePartage>
              </RessourceContainerPartage>
              <ContainerPlayerPartage>
                <ButtonMoinsPartage></ButtonMoinsPartage>
                <ChoosePlayer></ChoosePlayer>
                <ButtonPlusPartage></ButtonPlusPartage>
              </ContainerPlayerPartage>
              <ContainerButtonSubmitPartage>
                <ButtonSubmitPartage type="button" value="Envoyer" onClick={this.partageRessource} />
              </ContainerButtonSubmitPartage>
            </PartageContainer>
            <AfficheRessourceRecuJ4 id="receptionRessource">
              <CrossCodeRessource id="croix" src={croix} onClick={this.closePartageDiv} />
              <TitleRessource>de la part de <strong>{this.state.nameSendRessource}</strong></TitleRessource>
              <ContainerRessourceRecu>
                <ImgRessource src={logo_pierrePartage} />
                <NbRessource>{this.state.receptionPierre}</NbRessource>
                <ImgRessource src={logo_grainePartage} />
                <NbRessource>{this.state.receptionGraine}</NbRessource>
                <ImgRessource src={logo_fruitPartage} />
                <NbRessource>{this.state.receptionFruit}</NbRessource>
              </ContainerRessourceRecu>
            </AfficheRessourceRecuJ4>
            <ContainerConcertation>

            </ContainerConcertation>
          </MannetteContainerJoueur4>
        </>
      );
    }
  }
}

export default Manette;
