import React, { useEffect, useRef, lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, mediaQueries } from "../components/Theme";
import { motion } from "framer-motion";

import Loading from "../components/Loading";
import Header from "../components/Header/Header";
import Card from "../subComponents/Card";
import { Work } from "../data/WorkData";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));
const CircularMenu = lazy(() => import("../subComponents/CircularMenu"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;

  ${mediaQueries(90)`
  top: 9rem;
    left:calc(8rem + 15vw);
  `};

  ${mediaQueries(50)`
  top: 20%;
    left:calc(8rem + 15vw);
  `};

  ${mediaQueries(40)`
    top: 25%;
    left:calc(6rem + 15vw);
  `};

  ${mediaQueries(30)`
  top: 25%;   
    left:calc(2rem + 15vw);
  `};
  ${mediaQueries(25)`
    left:calc(1rem + 15vw);
  `};
`;

const Rotate = styled.span`
  position: fixed;
  transform-box: fill-box;
  right: 6rem;
  bottom: 2rem;
  z-index: 1;

  /* 
  ${mediaQueries(40)`
     width:60px;
         height:60px;   
       svg{
         width:60px;
         height:60px;
       }

  `};
  ${mediaQueries(25)`
        width:50px;
         height:50px;
        svg{
         width:50px;
         height:50px;
       }

  `}; */
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const circle = useRef(null);

  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.scrollY}px)`;
      circle.current.style.transform = `rotate(${-window.scrollY}deg)`;
    };

    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Header theme="dark" showMenu={false} />
          <SocialIcons theme="dark" />
          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {Work.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
          <Rotate ref={circle}>
            <CircularMenu />
          </Rotate>
          <BigTitle text="WORK" bottom="0%" right="60%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default WorkPage;
