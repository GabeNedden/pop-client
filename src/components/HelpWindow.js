import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { AiOutlineRightCircle } from "react-icons/ai";

const HelpWindow = ({ language }) => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>
            {language === "eng"
              ? "How can we help?"
              : "Comment pouvons nous aider?"}
          </Title>
          <Body>
            {language === "eng"
              ? "We provide free resources for mental health and substance use support. Tell us a little bit about yourself and we’ll find the ones best suited to you. Your answers will remain private and confidential."
              : "Nous fournissons des ressources gratuites pour le soutien en matière de santé mentale et de toxicomanie. Parlez-nous un peu de vous et nous trouverons ceux qui vous conviennent le mieux. Vos réponses resteront privées et confidentielles"}
          </Body>
          <Subtitle>
            {language === "eng"
              ? "And I’d like support with..."
              : "Et j'aimerais du soutien avec..."}
          </Subtitle>
          <OptionWrapper>
            <Option>
              <AiOutlineRightCircle style={{ margin: "0 4px 4px 0" }} />
              {language === "eng" ? "Managing Worry" : "Gérer le stress"}
            </Option>
            <Option>
              <AiOutlineRightCircle style={{ margin: "0 4px 4px 0" }} />
              {language === "eng" ? "Managing Worry" : "Gérer le stress"}
            </Option>
          </OptionWrapper>
          <CardGroup>
            <Card className="m-3" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.ctfassets.net/xavhorxgg9l4/728mGLkxA9JaIBA7jXtqJs/5f1c806cbc4cced446e8b8eda0c3a7f7/299744979_437053958476752_8835657168708456563_n.png"
              />
              <Card.Body>
                <Card.Title>Gerer ma Douleur</Card.Title>
                <Card.Text>
                  Some quick example text to test. Some quick example text to
                  test. Some quick example text to test.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-3" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.ctfassets.net/0ids0i6whhlw/3rKsrarGSELTiRQ8UQ1ste/5c8d4eef8d270c11fcf5348bbf931532/Togetherallforhealthcareworkers.jpeg?w=948&h=500&fl=progressive&q=50&fm=jpg"
              />
              <Card.Body>
                <Card.Title>Gerer ma Douleur</Card.Title>
                <Card.Text>
                  Some quick example text to test. Some quick example text to
                  test. Some quick example text to test.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-3" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.ctfassets.net/0ids0i6whhlw/76erv260wswNFYBu61z4Ah/54725f3aba3e51499f0231bedb1eb382/rtntQ53V2R_aK2bKFuxfIDYbHnjmD5RIVzUEJN8Giu8vMIh_Wz-DlZjP55ogbsIrKIpbvWpn-_0AOvKwBy7nlPmrsgKWcb-ruahAayj8F5OlcSt9fU4nsDgtPtw2vTNB?w=569&h=500&q=50&fm=webp"
              />
              <Card.Body>
                <Card.Title>Gerer ma Douleur</Card.Title>
                <Card.Text>
                  Some quick example text to test. Some quick example text to
                  test. Some quick example text to test.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default HelpWindow;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#e5e5ff, #fff);
  width: 1100px;
  max-width: 90%;
  min-height: 500px;
  margin: 30px 0;
  border-radius: 50px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 52px;
  margin: 40px 0 0 0;
`;

const Body = styled.p`
  font-size: 16px;
`;

const Subtitle = styled.div`
  font-weight: 700;
  font-size: 34px;
  width: 60%;
  margin-top: 30px;
  color: #5b3892;
`;

const OptionWrapper = styled.div`
  & > * {
    margin-right: 15px;
  }
`;

const Option = styled.button`
  width: 250px;
  background-color: white;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
  border: none;
  color: #5b3892;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 50px;
  justify-content: center;
  padding: 0 32px;
  transform: translate3d(0, 0, 0);
  transition: all 150ms;
  margin-top: 30px;
  &:hover {
    background-color: #ececec;
  }
  &:active {
    transform: scale(0.98);
  }
`;
