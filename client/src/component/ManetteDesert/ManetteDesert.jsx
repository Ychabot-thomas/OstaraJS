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
  ImgPlayer,
  ContainerPlayer1,
  ContainerPlayer2,
  ContainerPlayer3,
  ContainerPlayer4,
  ButtonMoinsPlayer,
  ButtonPlusPlayer,
} from "./ManetteDesert.styles";
import { CrossCode } from "../Connexion/Connexion.styles";
import { JoyStick } from "./joy";
import { ws, send, on } from "../../ws";
import logo_pierre from "../../img/logo_pierreDesert.png";
import logo_graine from "../../img/logo_graineDesert.png";
import logo_fruit from "../../img/logo_fruitDesert.png";
import logo_pierrePartage from "../../img/logo_pierrePartageDesert.png";
import logo_grainePartage from "../../img/logo_grainePartageDesert.png";
import logo_fruitPartage from "../../img/logo_fruitPartageDesert.png";
import logo_partage from "../../img/logo_partage_ressourceDesert.png";
import logo_parametre from "../../img/logo_parametre.png";
import logo_conseil from "../../img/logo_conseils.png";
import logo_information from "../../img/logo_informations.png";
import logo_map from "../../img/logo_map.png";
import croix from "../../img/croix.png";
import croixDesert from "../../img/croixDesert.png";
import btnVolume from "../../img/btnVolume.png";
import joueur1 from "../../img/joueur1.png";
import joueur2 from "../../img/joueur2.png";
import joueur3 from "../../img/joueur3.png";
import joueur4 from "../../img/joueur4.png";
import "./ManetteDesert.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import ImpactFinalRosalie from "../ImpactFinalRosalie/ImpactFinalRosalie";
import ImpactFinalVoiture from "../ImpactFinalVoiture/ImpactFinalVoiture";

class Manette extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      afficheAtout: false,
      affichePartage: false,
      afficheRessource: false,
      X: 0,
      Y: 0,
      pierre: props.pierre,
      graine: props.graine,
      fruit: props.fruit,
      partagePierre: 0,
      partageGraine: 0,
      partageFruit: 0,
      receptionPierre: 0,
      receptionGraine: 0,
      receptionFruit: 0,
      // PROD
      client: props.client,
      // DEV
      // client: 4,
      nameSendRessource: "",
      slideActif: 0,
      choice: props.impactFinal
    };
  }

  componentDidMount() {
    if (this.state.client === 1) {
      this.setState({ slideActif: 2 })
    }
    if (this.state.client === 2) {
      this.setState({ slideActif: 3 })
    }
    if (this.state.client === 3) {
      this.setState({ slideActif: 4 })
    }
    if (this.state.client === 4) {
      this.setState({ slideActif: 1 })
    }

    const Joy = new JoyStick("joy");

    const joystick = () => {
      // X
      let valueX = Joy.GetX();

      // Z
      let valueY = Joy.GetY();

      if (valueX !== this.state.X || valueY !== this.state.Y) {
        // send("move", { x: valueX, y: valueY, joueur: this.state.client });
      }

    };

    setInterval(joystick, 100);

    ws.onmessage = (event) => {
      on(event.data, "partageRessource", (str) => {
        console.log(str.partageJoueur);
        //joueur 1 réception
        if (str.partageJoueur === this.state.client) {
          console.log(str);
          this.setState(
            {
              nameSendRessource: str.sendPlayer,
              receptionPierre: str.pierre,
              receptionGraine: str.graine,
              receptionFruit: str.fruit,
              afficheRessource: true
            }
          );
        }

        // joueur 2 réception
        if (str.partageJoueur === this.state.client) {
          this.setState(
            {
              receptionPierre: str.pierre,
              receptionGraine: str.graine,
              receptionFruit: str.fruit,
              afficheRessource: true
            }
          );
        }

        // joueur 3 réception
        if (str.partageJoueur === this.state.client) {
          this.setState(
            {
              receptionPierre: str.pierre,
              receptionGraine: str.graine,
              receptionFruit: str.fruit,
              afficheRessource: true
            }
          );
        }

        // joueur 4 réception
        if (str.partageJoueur === this.state.client) {
          this.setState(
            {
              receptionPierre: str.pierre,
              receptionGraine: str.graine,
              receptionFruit: str.fruit,
              afficheRessource: true
            }
          );
        }
      })
    };
  }

  sauter = () => {
    send("jump", { jump: true });
  };

  atout = () => {
    this.setState({ afficheAtout: true });
  }

  partage = () => {
    this.setState({ affichePartage: true })
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
        partageJoueur: this.state.slideActif
      }
    );
    // console.log("nomJoueur : " + nomJoueur);
  }

  deleteDiv = () => {
    this.setState({ afficheAtout: false, affichePartage: false })
  };

  closePartageDiv = () => {
    this.setState(
      {
        pierre: this.state.pierre + this.state.receptionPierre,
        graine: this.state.graine + this.state.receptionGraine,
        fruit: this.state.fruit + this.state.receptionFruit,
        afficheRessource: false,
      }
    )
  };

  render() {

    const PrettoSlider = withStyles({
      root: {
        color: "#467014",
        height: 8
      },
      thumb: {
        height: 24,
        width: 24,
        backgroundImage: `url(${btnVolume})`,
        backgroundSize: 'cover',
        marginTop: -8,
        marginLeft: -12,
        "&:focus, &:hover, &$active": {
          boxShadow: "inherit"
        }
      },
      active: {},
      valueLabel: {
        left: "calc(-50% + 4px)"
      },
      track: {
        height: 8,
        borderRadius: 4
      },
      rail: {
        height: 8,
        borderRadius: 4
      }
    })(Slider);

    const {
      afficheAtout,
      affichePartage,
      afficheRessource,
      slideActif,
      client,
      choice
    } = this.state

    // Prod
    let idJoueur = client;

    // Dev
    // let idJoueur = 2;

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
                <InteractionPlayerPicture src={logo_parametre} onClick={this.atout} />
              </InteractionPlayer>
            </ActionContainerJoueur>
            <ControlPlayer>
              <JoystickContainer id="joy"></JoystickContainer>
              <ButtonPlayer onClick={this.sauter}></ButtonPlayer>
            </ControlPlayer>
            {afficheAtout === true && (
              <ParametreContainer>
                <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
                <TitleSettings>PARAMÈTRES</TitleSettings>
                <ContainerSettingsVolume>
                  <ContainerSettingsVolumeTitle>
                    <VolumeTitleSettings>musique</VolumeTitleSettings>
                    <VolumeTitleSettings>voix</VolumeTitleSettings>
                  </ContainerSettingsVolumeTitle>
                  <ContainerSettingsVolumeCursor>
                    <PrettoSlider defaultValue={100} valueLabelDisplay="auto" />
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
            )}
            {affichePartage === true && (
              <PartageContainer>
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
                  <CrossCode id="croix" src={croixDesert} onClick={this.deleteDiv} />
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
                  <ChoosePlayer>
                    {slideActif === 2 && (
                      <ContainerPlayer2 >
                        <ButtonMoinsPlayer onClick={() => { this.setState({ slideActif: 4 }) }}></ButtonMoinsPlayer>
                        <ImgPlayer src={joueur2} alt="joueur2" />
                        <ButtonPlusPlayer onClick={() => { this.setState({ slideActif: 3 }) }}></ButtonPlusPlayer>
                      </ContainerPlayer2>
                    )}
                    {slideActif === 3 && (
                      <ContainerPlayer3>
                        <ButtonMoinsPlayer onClick={() => { this.setState({ slideActif: 2 }) }}></ButtonMoinsPlayer>
                        <ImgPlayer src={joueur3} alt="joueur3" />
                        <ButtonPlusPlayer onClick={() => { this.setState({ slideActif: 4 }) }}></ButtonPlusPlayer>
                      </ContainerPlayer3>)}
                    {slideActif === 4 && (
                      <ContainerPlayer4>
                        <ButtonMoinsPlayer onClick={() => { this.setState({ slideActif: 3 }) }}></ButtonMoinsPlayer>
                        <ImgPlayer src={joueur4} alt="joueur4" />
                        <ButtonPlusPlayer onClick={() => { this.setState({ slideActif: 2 }) }}></ButtonPlusPlayer>
                      </ContainerPlayer4>
                    )}
                  </ChoosePlayer>
                </ContainerPlayerPartage>
                <ContainerButtonSubmitPartage>
                  <ButtonSubmitPartage type="button" value="Envoyer" onClick={this.partageRessource} />
                </ContainerButtonSubmitPartage>
              </PartageContainer>
            )}
            {afficheRessource === true && (
              <AfficheRessourceRecuJ1>
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
            )}
          </MannetteContainerJoueur1>
          {choice === "rosalie" && (
            <ImpactFinalRosalie client={client} />
          )}
          {choice === "voiture" && (
            <ImpactFinalVoiture client={client} />
          )}
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
                <InteractionPlayerPicture src={logo_conseil} onClick={this.atout} />
              </InteractionPlayer>
            </ActionContainerJoueur>
            <ControlPlayer>
              <JoystickContainer id="joy"></JoystickContainer>
              <ButtonPlayer onClick={this.sauter}></ButtonPlayer>
            </ControlPlayer>
            {afficheAtout === true && (
              <ParametreContainer>
                <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
                <ContainerCardConseil></ContainerCardConseil>
              </ParametreContainer>
            )}
            {affichePartage === true && (
              <PartageContainer>
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
                  <CrossCode id="croix" src={croixDesert} onClick={this.deleteDiv} />
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
                  <ChoosePlayer>
                    {slideActif === 1 && (
                      <ContainerPlayer1>
                        <ButtonMoinsPlayer onClick={() => { this.setState({ slideActif: 4 }) }}></ButtonMoinsPlayer>
                        <ImgPlayer src={joueur1} alt="joueur1" />
                        <ButtonPlusPlayer onClick={() => { this.setState({ slideActif: 3 }) }}></ButtonPlusPlayer>
                      </ContainerPlayer1>
                    )}
                    {slideActif === 3 && (
                      <ContainerPlayer3>
                        <ButtonMoinsPlayer onClick={() => { this.setState({ slideActif: 1 }) }}></ButtonMoinsPlayer>
                        <ImgPlayer src={joueur3} alt="joueur3" />
                        <ButtonPlusPlayer onClick={() => { this.setState({ slideActif: 4 }) }}></ButtonPlusPlayer>
                      </ContainerPlayer3>)}
                    {slideActif === 4 && (
                      <ContainerPlayer4>
                        <ButtonMoinsPlayer onClick={() => { this.setState({ slideActif: 3 }) }}></ButtonMoinsPlayer>
                        <ImgPlayer src={joueur4} alt="joueur4" />
                        <ButtonPlusPlayer onClick={() => { this.setState({ slideActif: 1 }) }}></ButtonPlusPlayer>
                      </ContainerPlayer4>
                    )}
                  </ChoosePlayer>
                </ContainerPlayerPartage>
                <ContainerButtonSubmitPartage>
                  <ButtonSubmitPartage type="button" value="Envoyer" onClick={this.partageRessource} />
                </ContainerButtonSubmitPartage>
              </PartageContainer>
            )}
            {afficheRessource === true && (
              <AfficheRessourceRecuJ2>
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
            )}
          </MannetteContainerJoueur2>
          {choice === "rosalie" && (
            <ImpactFinalRosalie client={client} />
          )}
          {choice === "voiture" && (
            <ImpactFinalVoiture client={client} />
          )}
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
                <InteractionPlayerPicture src={logo_information} onClick={this.atout} />
              </InteractionPlayer>
            </ActionContainerJoueur>
            <ControlPlayer>
              <JoystickContainer id="joy"></JoystickContainer>
              <ButtonPlayer onClick={this.sauter}></ButtonPlayer>
            </ControlPlayer>
            {afficheAtout === true && (
              <ParametreContainer>
                <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
                <ContainerCardInfo></ContainerCardInfo>
              </ParametreContainer>
            )}
            {affichePartage === true && (
              <PartageContainer>
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
                  <CrossCode id="croix" src={croixDesert} onClick={this.deleteDiv} />
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
                  <ChoosePlayer>
                    {slideActif === 1 && (
                      <ContainerPlayer1>
                        <ButtonMoinsPlayer onClick={() => { this.setState({ slideActif: 4 }) }}></ButtonMoinsPlayer>
                        <ImgPlayer src={joueur1} alt="joueur1" />
                        <ButtonPlusPlayer onClick={() => { this.setState({ slideActif: 2 }) }}></ButtonPlusPlayer>
                      </ContainerPlayer1>
                    )}
                    {slideActif === 2 && (
                      <ContainerPlayer2>
                        <ButtonMoinsPlayer onClick={() => { this.setState({ slideActif: 1 }) }}></ButtonMoinsPlayer>
                        <ImgPlayer src={joueur2} alt="joueur2" />
                        <ButtonPlusPlayer onClick={() => { this.setState({ slideActif: 4 }) }}></ButtonPlusPlayer>
                      </ContainerPlayer2>)}
                    {slideActif === 4 && (
                      <ContainerPlayer4>
                        <ButtonMoinsPlayer onClick={() => { this.setState({ slideActif: 2 }) }}></ButtonMoinsPlayer>
                        <ImgPlayer src={joueur4} alt="joueur4" />
                        <ButtonPlusPlayer onClick={() => { this.setState({ slideActif: 1 }) }}></ButtonPlusPlayer>
                      </ContainerPlayer4>
                    )}
                  </ChoosePlayer>
                </ContainerPlayerPartage>
                <ContainerButtonSubmitPartage>
                  <ButtonSubmitPartage type="button" value="Envoyer" onClick={this.partageRessource} />
                </ContainerButtonSubmitPartage>
              </PartageContainer>
            )}
            {afficheRessource === true && (
              <AfficheRessourceRecuJ3>
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
            )}
          </MannetteContainerJoueur3>
          {choice === "rosalie" && (
            <ImpactFinalRosalie client={client} />
          )}
          {choice === "voiture" && (
            <ImpactFinalVoiture client={client} />
          )}
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
                <InteractionPlayerPicture src={logo_map} onClick={this.atout} />
              </InteractionPlayer>
            </ActionContainerJoueur>
            <ControlPlayer>
              <JoystickContainer id="joy"></JoystickContainer>
              <ButtonPlayer onClick={this.sauter}></ButtonPlayer>
            </ControlPlayer>
            {afficheAtout === true && (
              <ParametreContainer>
                <CrossCode id="croix" src={croix} onClick={this.deleteDiv} />
                <TitleSettings>MAP</TitleSettings>
                <ContainerMap></ContainerMap>
              </ParametreContainer>
            )}
            {affichePartage === true && (
              <PartageContainer>
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
                  <CrossCode id="croix" src={croixDesert} onClick={this.deleteDiv} />
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
                  <ChoosePlayer>
                    {slideActif === 1 && (
                      <ContainerPlayer1>
                        <ButtonMoinsPlayer onClick={() => { this.setState({ slideActif: 3 }) }}></ButtonMoinsPlayer>
                        <ImgPlayer src={joueur1} alt="joueur1" />
                        <ButtonPlusPlayer onClick={() => { this.setState({ slideActif: 2 }) }}></ButtonPlusPlayer>
                      </ContainerPlayer1>
                    )}
                    {slideActif === 2 && (
                      <ContainerPlayer2>
                        <ButtonMoinsPlayer onClick={() => { this.setState({ slideActif: 1 }) }}></ButtonMoinsPlayer>
                        <ImgPlayer src={joueur2} alt="joueur2" />
                        <ButtonPlusPlayer onClick={() => { this.setState({ slideActif: 3 }) }}></ButtonPlusPlayer>
                      </ContainerPlayer2>)}
                    {slideActif === 3 && (
                      <ContainerPlayer3>
                        <ButtonMoinsPlayer onClick={() => { this.setState({ slideActif: 2 }) }}></ButtonMoinsPlayer>
                        <ImgPlayer src={joueur3} alt="joueur3" />
                        <ButtonPlusPlayer onClick={() => { this.setState({ slideActif: 1 }) }}></ButtonPlusPlayer>
                      </ContainerPlayer3>
                    )}
                  </ChoosePlayer>
                </ContainerPlayerPartage>
                <ContainerButtonSubmitPartage>
                  <ButtonSubmitPartage type="button" value="Envoyer" onClick={this.partageRessource} />
                </ContainerButtonSubmitPartage>
              </PartageContainer>
            )}
            {afficheRessource === true && (
              <AfficheRessourceRecuJ4>
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
            )}
          </MannetteContainerJoueur4>
          {choice === "rosalie" && (
            <ImpactFinalRosalie client={client} />
          )}
          {choice === "voiture" && (
            <ImpactFinalVoiture client={client} />
          )}
        </>
      );
    }
  }
}

export default Manette;
