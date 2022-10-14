import React, { useContext } from "react";
import styled from "styled-components";

import { LanguageContext } from "../contexts/LanguageContext";
import CarouselContainer from "../components/CarouselContainer";
import Card from "../components/Card";

import { AiOutlineBulb } from "react-icons/ai";
import { RiPencilRuler2Line } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FiPhoneCall } from "react-icons/fi";
import HelpWindow from "../components/HelpWindow";

const HomePage = () => {
  const { language } = useContext(LanguageContext);

  const cardsInfo = [
    {
      color: "#5b3892",
      children: <AiOutlineBulb />,
      title: language === "eng" ? "Learn" : "Étudier",
      body:
        language === "eng"
          ? "Browse free articles, videos, and more."
          : "Parcourez des articles gratuits, des vidéos et bien plus encore.",
      button: language === "eng" ? "Learn" : "Étudier",
    },
    {
      color: "#c63975",
      children: <RiPencilRuler2Line />,
      title: language === "eng" ? "Practice" : "Pratique",
      body:
        language === "eng"
          ? "Build your skills with comprehensive courses and apps."
          : "Développez vos compétences avec des cours et des applications complets.",
      button: language === "eng" ? "Practice" : "Pratique",
    },
    {
      color: "#322157",
      children: <FaHandHoldingHeart />,
      title: language === "eng" ? "Connect" : "Liaison",
      body:
        language === "eng"
          ? "Come together with others who understand your experiences."
          : "Rassemblez-vous avec d'autres personnes qui comprennent vos expériences.",
      button: language === "eng" ? "Connect" : "Liaison",
    },
    {
      color: "#326a46",
      children: <VscGraph />,
      title: language === "eng" ? "Track" : "Réviser",
      body:
        language === "eng"
          ? "Check in with regular wellness assessments."
          : "Enregistrez-vous avec des évaluations de bien-être régulières.",
      button: language === "eng" ? "Track" : "Réviser",
    },
    {
      color: "#FF5733",
      children: <FiPhoneCall />,
      title: language === "eng" ? "Talk" : "Discuter",
      body:
        language === "eng"
          ? "Get in touch with a counsellor."
          : "Rapprochez-vous d'un conseiller.",
      button: language === "eng" ? "Talk" : "Discuter",
    },
  ];
  return (
    <Wrapper>
      <CarouselContainer language={language} />
      <InfoBar />
      <Section>
        <Title>
          {language === "eng"
            ? "Get the right support. Always free."
            : "Obtenez le soutien. Toujours gratuit."}
        </Title>
        <CardWrapper>
          {cardsInfo.map((card, index) => {
            return (
              <Card
                key={index}
                body={card.body}
                button={card.button}
                children={card.children}
                color={card.color}
                title={card.title}
              />
            );
          })}
        </CardWrapper>
      </Section>
      <div>
        <HelpWindow language={language} />
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div``;

const InfoBar = styled.div`
  background-color: #0a69b5;
  width: 100%;
  height: 60px;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 42px;
  width: 60%;
  margin: auto;
  margin-top: 30px;
`;

const Section = styled.section`
  border: white solid 1px;
  background-color: #f2f3f4;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
  margin-top: 50px;
  min-height: 320px;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 60%;
  }
`;
