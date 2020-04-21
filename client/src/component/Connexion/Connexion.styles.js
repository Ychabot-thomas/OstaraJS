import styled from "styled-components";
import fond from "../../img/inputFond.png";

export const DivTouch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
`;

export const ImgOstara = styled.img`
  width: 60%;
  margin: 0 auto;
`;

export const ImgGobelins = styled.img`
  width: 8%;
  margin: 0 auto;
`;

export const TitlePage = styled.h1`
  font-family: "Infini", sans-serif;
  color: #91541d;
  font-size: 20px;
  text-align: center;
  position: relative;
`;

export const SpanTitle = styled.span`
  ::before,
  ::after {
    content: "";
    width: 110px;
    height: 2px;
    background-color: #91541d;
    position: absolute;
    top: 50%;
  }
  ::before {
    left: 120px;
  }

  ::after {
    margin-left: 15px;
  }
`;

export const ConnexionContainer = styled.div`
  width: 40%;
  background-color: #e5ae74;
  border-radius: 50px;
  position: relative;
  top: 30px;
  right: 40px;
`;

export const ConnexionTitle = styled.h1`
  font-family: "Infini", sans-serif;
  font-size: 28px;
  color: #332419;
  padding: 5px 5px 5px 60px;
  text-transform: uppercase;
`;

export const TextConnexion = styled.p`
  font-family: "Infini", sans-serif;
  font-size: 14px;
  color: #dfa666;
  text-align: center;
  margin-top: 55px;
`;

export const InputCode = styled.input`
  display: block;
  margin: 0 auto;
  font-family: "Infini", sans-serif;
  background-color: #052e21;
  color: #e5ae74;
  border: 7px solid #6d3200;
  border-radius: 24px;
  height: 100px;
  width: 60%;
  font-size: 65px;
  text-align: center;
  font-variant: lining-nums;
  margin-top: 25px;
  letter-spacing: 25px;
`;

export const ContainerInputConnexion = styled.div`
  width: 30%;
  height: 40px;
  background-image: url(${fond});
  background-size: cover;
  position: absolute;
  right: 0;
  margin-top: 20px;
`;

export const InputConnexion = styled.input`
  font-family: "Infini", sans-serif;
  font-size: 20px;
  color: #f8d5b1;
  position: relative;
  left: 50px;
  top: 3px;
`;
