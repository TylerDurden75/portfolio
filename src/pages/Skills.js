import { lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, mediaQueries } from "../components/Theme";
import { motion } from "framer-motion";

import { mySkills } from "../data/SkillData";
import Loading from "../components/Loading";
import Header from "../components/Header/Header";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));
const ParticleComponent = lazy(
  () => import("../subComponents/ParticleComponent"),
);
const SkillsComponent = lazy(() => import("../components/SkillsComponent"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(40)`
    top: 8em;
  `};
`;

const Grid = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(5rem + 2vw);

  ${mediaQueries(50)`
    grid-template-columns: 100%;

  `};

  ${mediaQueries(40)`
    margin-top: 5rem;
    grid-gap: calc(1.1em + 1.1vw);
  `};
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

const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Header theme="light" showMenu />
          <SocialIcons theme="light" />
          <ParticleComponent theme="light" />

          <Grid variants={container} initial="hidden" animate="show">
            {mySkills.map((skills) => {
              return <SkillsComponent key={skills.id} skills={skills} />;
            })}
          </Grid>
        </Box>
        <BigTitle text="SKILLS" bottom="0%" right="35%" />
      </Suspense>
    </ThemeProvider>
  );
};

export default Skills;
