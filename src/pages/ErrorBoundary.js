import { lazy, Suspense } from "react";
import styled from "styled-components";
import { mediaQueries } from "../components/Theme";

import Loading from "../components/Loading";

const Look = lazy(() => import("../components/Look"));
const Door = lazy(() => import("../components/Door"));

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: black;
  overflow: hidden;
  user-select: none;

  ${mediaQueries(50)`
    font-size: calc(0.35em + 1vw);
  `};

  ${mediaQueries(30)`
    font-size:calc(0.4em + 1vw);
  `};

  ${mediaQueries(25)`
  font-size:calc(0.3em + 1vw);
  `};
`;

const Title = styled.h1`
  color: white;
  position: relative;
  top: 10%;
  font-size: 18em;
  text-transform: uppercase;

  ${mediaQueries(30)`
    top: 0%;
  `};
`;

const Enigma = styled.h3`
  color: white;
  position: absolute;
  top: 88%;
  transform: translateY(-50%);
  font-size: 1em;
  font-family: "Karla", sans-serif;
  font-weight: 200;

  ${mediaQueries(30)`
    top: 65%;
  `};
`;

const ErrorBoundary = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Box>
        <Look />
        <Title>
          <span style={{ fontSize: "0.5em" }}>4</span>
          <span style={{ color: "#A65961" }}>o</span>
          <span style={{ fontSize: "0.5em" }}>4</span>
        </Title>
        <Enigma>
          If you don't want to be stuck into Darkness find the BackDoor...😈
        </Enigma>
        <Door />
      </Box>
    </Suspense>
  );
};

export default ErrorBoundary;
