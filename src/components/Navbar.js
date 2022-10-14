import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPeople, BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { RiMapPinAddLine } from "react-icons/ri";
import { BiSearchAlt, BiUserCircle } from "react-icons/bi";
import ReactComponent from "../assets/headerLogo.png";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Dropdown from "react-bootstrap/Dropdown";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  console.log(language);

  return (
    <>
      <Notif>
        {language === "eng"
          ? "In need of immediate crisis support? Call 911 if you or someone you know is in immediate danger or needs urgent medical care."
          : "Besoin d'un soutien immédiat en cas de crise ? Appelez le 911 si vous ou quelqu'un que vous connaissez êtes en danger immédiat ou avez besoin de soins médicaux urgents."}
      </Notif>
      <Nav>
        <Ul>
          <Header to="/">
            <StyledLogo src={ReactComponent} />
          </Header>
        </Ul>
        <Ul>
          <Li>
            {language === "eng"
              ? "Privacy Policy"
              : "Politique de Confidentialité"}
          </Li>

          <Li>
            {language === "eng" ? "Tools and Support" : "Outils et Assistance"}
          </Li>
          <Li>{language === "eng" ? "Sign In" : "Connecté"}</Li>

          {/* <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              style={{ color: "#666666", fontSize: 14, fontWeight: 700 }}
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

          <StyledButton>
            {language === "eng" ? "Create an account" : "Créer un compte"}
          </StyledButton>
          <ClickLi
            onClick={language === "fre" ? toggleLanguage : null}
            className={language === "eng" && "clicked"}
          >
            EN
          </ClickLi>
          <ClickLi
            onClick={language === "eng" ? toggleLanguage : null}
            className={language === "fre" && "clicked"}
          >
            FR
          </ClickLi>
        </Ul>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5em;
  padding: 15px;
  margin: 5px;
  z-index: 10;

  @media only screen and (min-width: 600px) {
  }
`;

const Notif = styled.nav`
  background-color: #0a69b5;
  font-size: 14px;
  color: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
`;

const StyledLogo = styled.img`
  height: 60px;
`;

const Tab = styled(Link)`
  width: 100%;
  color: var(--clr-fg);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 24px;
  /* Change the color of links on hover */
  &:hover {
    color: var(--clr-fg);
  }
  /* Add a color to the active/current link */
  &:active {
    background-color: var(--clr-primary);
    color: var(--clr-fg);
  }
`;

const Ul = styled.nav`
  display: flex;
  margin-right: 1.5em;
  align-items: center;
  list-style-type: none;
  & > * {
    margin-left: 1.5em;
  }
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

const Header = styled(Link)`
  font-size: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 20px;
  color: var(--clr-primary);
`;

const Li = styled.li`
  color: #666666;
  font-size: 15px;
  font-weight: 700;
`;

const ClickLi = styled.li`
  color: #666666;
  font-size: 15px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;
