import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "./Theme";
import CircleType from "circletype";

const Circular = styled.div`
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.1)`};
  font-family: "Karla", sans-serif;
  font-weigth: bolder;
  transition: 0.5s ease-out;
  transform-origin: center;
  transform-box: fill-box;
  transform: scale(1.2);
  cursor: pointer;
  -webkit-text-stroke: 1px;

  /* position: fixed;
  transform-box: fill-box;
  right: 6rem;
  bottom: 2rem;
  z-index: 1; */

  &:hover {
    color: ${(props) => props.theme.text};
  }

  ${mediaQueries(40)`
     transform: scale(0.9); 
  `};
`;

const CircularMenu = () => {
  const circleInstance = useRef();
  const history = useHistory();

  useEffect(() => {
    const circleMenu = new CircleType(circleInstance.current);

    const letters = circleMenu._letters;
    const keys = Object.keys(letters);

    for (let i = 2; i < 6; i++) {
      const work = letters[keys[i]];
      work.onclick = function () {
        history.push("/work");
      };
    }

    for (let i = 9; i < 13; i++) {
      const blog = letters[keys[i]];
      blog.onclick = function () {
        history.push("/stack");
      };
    }

    for (let i = 16; i < 21; i++) {
      const skills = letters[keys[i]];
      skills.onclick = function () {
        history.push("/skills");
      };
    }

    for (let i = 25; i < 30; i++) {
      const about = letters[keys[i]];
      about.onclick = function () {
        history.push("/about");
      };
    }

    return () => circleMenu.destroy();
  }, [history]);

  return (
    <Circular ref={circleInstance}>* WORK * STACK * SKILLS * ABOUT</Circular>
  );
};

export default CircularMenu;
