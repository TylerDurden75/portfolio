import { lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "../components/Theme";
import { motion } from "framer-motion";

import Loading from "../components/Loading";
import MenuBox from "../components/MenuBox/MenuBox";

const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const ParticleComponent = lazy(
  () => import("../subComponents/ParticleComponent"),
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));
const Description = lazy(() => import("../components/Description"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <MenuBox />
          <ParticleComponent theme="dark" />
          <Description />
        </Box>
        <BigTitle text="ABOUT" bottom="0%" right="5%" />
      </Suspense>
    </ThemeProvider>
  );
};

export default About;
