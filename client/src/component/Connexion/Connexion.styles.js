import styled from "styled-components";

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
    left: 135px;
  }

  ::after {
    margin-left: 15px;
  }
`;

export const ConnexionContainer = styled.div`
  width: 40%;
  background-color: #e5ae74;
  border-radius: 50px;
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
`;

export const InputCode = styled.input.attrs((props) => ({
  type: "text",
}))`
  font-family: "Infini", sans-serif;
  background-color: #052e21;
  color: #e5ae74;
  border-radius: 10px solid #6d3200;
`;

export const InputConnexion = styled.input.attrs((props) => ({
  type: "submit",
  value: "Valider",
}))`
  font-family: "Infini", sans-serif;
  font-size: 20px;
  color: #f8d5b1;
`;
