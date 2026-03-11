import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { darkTheme, mediaQueries } from "./Theme";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Karla", sans-serif;
  font-size: 3.3rem;

  position: fixed;
  left: 2rem;
  top: 1.4rem;
  z-index: 3;

  cursor: pointer;

  ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
`;

const LogoComponent = (props) => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    let url = "/home";
    history.push(url);
  };

  return (
    <Logo color={props.theme} onClick={handleClick}>
      TJ
    </Logo>
  );
};

export default LogoComponent;
