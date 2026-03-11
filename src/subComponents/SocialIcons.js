import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, Linkedin } from "../components/AllSvgs";
import { darkTheme, mediaQueries } from "../components/Theme";
import Plane from "./Plane";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 1.5%;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.3rem 0;

    ${mediaQueries(40)`
      margin: 0.3rem 0 0;
  `};
  }

  ${mediaQueries(40)`
  left: 0.1rem;
      svg{
        transform: scale(0.7);
      }
  `};
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 6rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{
          transform: "scale(0)",
        }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "mailto:thibaultj.dev@gmail.com" }}
        >
          <Plane
            width={30}
            height={30}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{
          transform: "scale(0)",
        }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/TylerDurden75" }}
        >
          <Github
            width={30}
            height={30}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{
          transform: "scale(0)",
        }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.linkedin.com/in/thibaultj-dev" }}
        >
          <Linkedin
            width={30}
            height={30}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{ height: "6rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
