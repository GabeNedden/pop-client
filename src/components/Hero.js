import React from "react";
import styled from "styled-components";
import background from "../assets/openhand.jpg";
import logo from "../assets/headerLogo.png";

const Hero = ({ language }) => {
  return (
    <Wrapper style={{ backgroundImage: `url(${background})` }}>
      <Row>
        <TextBox>
          <Title>{language === "eng" ? "Welcome" : "Bienvenue"}</Title>
          <Body>
            {language === "eng"
              ? "Learning to cope with pain on your own is challenging, but you are not alone on this journey: there is hope. We are here to provide you with resources and support so you can feel empowered!"
              : "Apprendre à faire face à la douleur par soi-même est un défi, mais vous n'êtes pas seul dans ce voyage : il y a de l'espoir. Nous sommes là pour vous fournir des ressources et du soutien afin que vous puissiez vous sentir autonome!"}
          </Body>
          <Body>
            {language === "eng"
              ? "Get started by creating an account; it is possible to have power over your pain."
              : "Commencez par créer un compte ; il est possible d'avoir du pouvoir sur votre douleur."}
          </Body>
        </TextBox>
        <Card>
          <StyledLogo src={logo} />
          <Title>
            {language === "eng"
              ? "Start Your Journey"
              : "Commencez votre voyage"}
          </Title>
          <Body style={{ textAlign: "center" }}>
            {language === "eng"
              ? "Designed for adults (ages 18+) and pain professionals across Canada"
              : "Conçu pour les adultes (18 ans et plus) et les professionnels de la douleur partout au Canada"}
          </Body>
          <ul>
            <li>
              {language === "eng"
                ? "Track your progress"
                : "Suivez vos progrès"}
            </li>
            <li>
              {language === "eng" ? "Accessible 24/7" : "Toujours accessible"}
            </li>
            <li>
              {language === "eng"
                ? "Private and Confidential"
                : "Privé et confidentiel"}
            </li>
          </ul>
          <StyledButton>
            {language === "eng" ? "Get Started Today" : "Commencer aujourd'hui"}
          </StyledButton>
        </Card>
      </Row>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  height: 600px;
  width: 100%;
  background-position: bottom;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(background);
  background-size: cover;
  background-repeat: no-repeat;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  & > * {
    margin: 150px;
    width: 100%;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 50px 10px;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 15px 0;
  }
`;

const TextBox = styled.div`
  color: black;
  min-width: 300px;

  & > * {
    margin: 10px;
  }
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const Body = styled.div``;

const StyledLogo = styled.img`
  width: 40%;
  margin: 20px 0 0 0;
`;

const StyledButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #f54e5f;
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 10px 20px;
`;
