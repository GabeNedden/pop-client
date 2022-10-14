import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ body, button, children, color, title }) => {
  return (
    <Wrapper>
      <Container>
        <IconContainer style={{ backgroundColor: color }}>
          {children}
        </IconContainer>
        <Title>{title}</Title>
        <Body>{body}</Body>
        <Button style={{ backgroundColor: color }}>{button}</Button>
        <ArrowContainer style={{ color: color }}>
          <AiOutlineArrowRight />
        </ArrowContainer>
      </Container>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  max-height: 250px;
  margin: 10px;
  border-radius: 10px;

  @media (max-width: 1000px) {
    min-height: 160px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #437f3d;

  height: 60px;
  width: 60px;
  border-radius: 50%;

  margin-top: -50px;
  font-size: 32px;

  @media (max-width: 1000px) {
    aspect-ratio: 1 / 1;
    margin-left: -70px;
  }
`;

const ArrowContainer = styled.div`
  display: none;
  justify-content: end;
  align-items: end;

  height: 60px;
  width: 60px;
  border-radius: 50%;

  margin-top: -50px;
  font-size: 32px;

  @media (max-width: 1000px) {
    display: flex;
    aspect-ratio: 1 / 1;
    margin-left: -70px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin-top: 15px;

  @media (max-width: 1000px) {
    flex-direction: row;
    margin-top: 50px;
  }
`;

const Title = styled.h4`
  margin: 10px 0;
`;

const Body = styled.p`
  height: 70px;
`;

const Button = styled.button`
  background-color: #437f3d;
  border-radius: 16px;
  width: 80%;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  height: 32px;
  justify-content: center;
  padding: 0 32px;
  transform: translate3d(0, 0, 0);
  transition: all 150ms;
  margin-top: 30px;
  &:hover {
    opacity: 0.85;
  }
  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
