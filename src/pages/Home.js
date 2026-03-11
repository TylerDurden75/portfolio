import { Suspense, lazy, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styled from "styled-components";
import { ThibLogo } from "../components/AllSvgs";
import { mediaQueries } from "../components/Theme";

import Intro from "../components/Intro";
import Loading from "../components/Loading";
import Header from "../components/Header/Header";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;
  `};
    ${mediaQueries(30)`
      font-size:1em;
  `};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const TECHNO = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    color: ${(props) => props.theme.body};
    text-shadow: 0 0 4px #000;
  }
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    text-shadow: 0 0 4px #000;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const WORK = styled(NavLink)`
  color: ${(props) => props.theme.body};
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    color: ${(props) => props.theme.text};
  }
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Center = styled.button`
  position: absolute;
  top: 90%;
  left: 95%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :last-child {
    display: none;
    padding-top: 1rem;
  }

  @media only screen and (max-width: 50em) {
    top: 90%;
    left: 90%;
    width: 80px;
    height: 80px;
  }
  @media only screen and (max-width: 30em) {
    width: 40px;
    height: 40px;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: 50%;
  height: 100%;
  z-index: 1;

  ${mediaQueries(50)`
      height: 50%;
      right:0;
      width: 100%;
      `}
`;

const Home = () => {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");  const moveY = {
    y: "100%",
  };
  const moveX = {
    x: `${path === "about" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;

  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "work" || path === "skills" ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <DarkDiv />
        <Container>
          <Header theme="dark" showMenu={false} />
          {mq ? <SocialIcons theme="light" /> : <SocialIcons theme="dark" />}

          <Center>
            {mq ? (
              <ThibLogo width={55} height={80} fill="currentColor" />
            ) : (
              <ThibLogo width={75} height={100} fill="currentColor" />
            )}
          </Center>

          {mq ? (
            <TECHNO onClick={() => setpath("stack")} to="/stack">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Stack.
              </motion.h2>
            </TECHNO>
          ) : (
            <TECHNO
              click={+false}
              onClick={() => setpath("stack")}
              to="/stack"
            >
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Stack.
              </motion.h2>
            </TECHNO>
          )}

          <ABOUT $click={+click} to="/about">
            <motion.h2
              onClick={() => setpath("about")}
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </ABOUT>

          <BottomBar>
            <WORK
              $click={mq ? +false : +click}
              to="/work"
              onClick={() => setClick(false)}
            >
              <motion.h2
                onClick={() => setpath("work")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Work.
              </motion.h2>
            </WORK>
            <SKILLS to="/skills">
              <motion.h2
                onClick={() => setpath("skills")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Skills.
              </motion.h2>
            </SKILLS>
          </BottomBar>
        </Container>
        <Intro />
      </MainContainer>
    </Suspense>
  );
};

export default Home;
