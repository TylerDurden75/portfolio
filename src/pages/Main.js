import { Suspense, lazy, useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styled from "styled-components";
import { ThibLogo } from "../components/AllSvgs";
import { mediaQueries } from "../components/Theme";

import Intro from "../components/Intro";
import Loading from "../components/Loading";
import Header from "../components/Header/Header";

const SocialIcons = lazy(() => import("../components/SocialIcons"));

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

const STACK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    text-shadow: 0 0 4px #000;
  }
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
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
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    color: ${(props) => (props.$click ? props.theme.text : "none")};
  }
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.$click ? "90%" : "50%")};
  left: ${(props) => (props.$click ? "95%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: ${(props) => (props.$click ? null : "pointer")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :last-child {
    display: ${(props) => (props.$click ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.$click ? "90%" : "50%")};
    left: ${(props) => (props.$click ? "90%" : "50%")};
    width: ${(props) => (props.$click ? "80px" : "150px")};
    height: ${(props) => (props.$click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.$click ? "40px" : "150px")};
    height: ${(props) => (props.$click ? "40px" : "150px")};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.$click ? "50%" : "0%")};
  height: ${(props) => (props.$click ? "100%" : "0%")};
  z-index: 1;
  transition:
    height 0.5s ease,
    width 1s ease 0.5s;

  ${(props) =>
    props.$click
      ? `
    ${mediaQueries(50)`
      height: 50%;
      right: 0;
      width: 100%;
      transition: width 0.5s ease, height 1s ease 0.5s;
    `}
  `
      : `
    ${mediaQueries(50)`
      height: 0;
      width: 0;
    `}
  `}
`;

const LogoVortexWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
  backface-visibility: hidden;
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const [path, setpath] = useState("");
  const [vortexPhase, setVortexPhase] = useState("idle"); // "idle" | "vortex" | "done"
  const vortexCompletedRef = useRef(false);

  const handleClick = () => {
    if (vortexPhase !== "idle") return;
    setVortexPhase("vortex");
  };

  const onVortexComplete = () => {
    if (vortexCompletedRef.current) return;
    vortexCompletedRef.current = true;
    setVortexPhase("done");
    setClick(true);
    setShow(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (vortexPhase === "idle") setVortexPhase("vortex");
    }, 2000);
    return () => clearTimeout(timer);
  }, [vortexPhase]);

  const moveY = {
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
        <DarkDiv $click={click} />
        <Container>
          <Header theme="dark" showMenu={false} />
          {mq ? <SocialIcons theme="light" /> : <SocialIcons theme="dark" />}

          <Center $click={click} aria-label="Afficher le menu du portfolio">
            <LogoVortexWrapper
              initial={false}
              animate={
                vortexPhase === "vortex"
                  ? {
                      rotate: 360 * 10,
                      scale: 0,
                      opacity: 1,
                    }
                  : { rotate: 0, scale: 1, opacity: 1 }
              }
              transition={
                vortexPhase === "vortex"
                  ? {
                      duration: 1.5,
                      ease: [0.35, 0, 0.65, 1],
                    }
                  : { duration: 0 }
              }
              onAnimationComplete={() => {
                if (vortexPhase === "vortex") onVortexComplete();
              }}
            >
              {mq ? (
                <ThibLogo
                  onClick={() => handleClick()}
                  width={click ? 55 : 200}
                  height={click ? 80 : 250}
                  fill="currentColor"
                  style={{ position: "relative", zIndex: 1 }}
                />
              ) : (
                <ThibLogo
                  onClick={() => handleClick()}
                  width={click ? 75 : 300}
                  height={click ? 100 : 400}
                  fill="currentColor"
                  style={{ position: "relative", zIndex: 1 }}
                />
              )}
            </LogoVortexWrapper>
          </Center>

          {mq ? (
            <STACK click={+click} onClick={() => setpath("stack")} to="/stack">
              {show ? (
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
              ) : null}
            </STACK>
          ) : (
            <STACK click={+false} onClick={() => setpath("stack")} to="/stack">
              {show && (
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
              )}
            </STACK>
          )}

          {show && (
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
          )}

          {show && (
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
          )}
        </Container>
        {click && <Intro $click={click} />}
      </MainContainer>
    </Suspense>
  );
};

export default Main;
