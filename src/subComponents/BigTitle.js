import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../components/Theme";

const Text = styled.h1`
  position: fixed;
  top: ${(props) => (props.bottom ? "auto" : props.top)};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;

  ${mediaQueries(70)`
    top: ${(props) => (props.bottom ? "auto" : "35rem")};
    bottom: ${(props) => (props.bottom ? "2rem" : "auto")};
    left: ${(props) => (props.bottom ? "auto" : "9rem")};
    right: ${(props) => (props.bottom ? props.right : "auto")};
  `};

  ${mediaQueries(60)`
    top: ${(props) => (props.bottom ? "auto" : "35rem")};
    bottom: ${(props) => (props.bottom ? "2rem" : "auto")};
    left: ${(props) => (props.bottom ? "auto" : "7rem")};
    right: ${(props) => (props.bottom ? props.right : "auto")};
  `};

  ${mediaQueries(40)`
    top: ${(props) => (props.bottom ? "auto" : "4rem")};
    bottom: ${(props) => (props.bottom ? "1.5rem" : "auto")};
    left: ${(props) => (props.bottom ? "auto" : "3.5rem")};
    right: ${(props) => (props.bottom ? props.right : "auto")};
  `};
`;

const BigTitle = (props) => {
  return (
    <Text
      top={props.top}
      bottom={props.bottom}
      left={props.left}
      right={props.right}
    >
      {props.text}
    </Text>
  );
};

export default BigTitle;
