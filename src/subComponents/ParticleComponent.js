import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

const optionsDark = {
  preset: "links",
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  particles: {
    color: { value: "#fcf6f4" },
    number: { value: 100, density: { enable: true, width: 800, height: 800 } },
    opacity: { value: 1, random: true },
    size: { value: 3, random: true },
    move: { enable: true, speed: 3 },
    links: { enable: false },
  },
  interactivity: {
    events: {
      onClick: { enable: true, mode: "repulse" },
    },
    modes: {
      repulse: { distance: 400, duration: 0.4 },
    },
  },
  detectRetina: true,
};

const optionsLight = {
  ...optionsDark,
  particles: {
    ...optionsDark.particles,
    color: { value: "#000000" },
    links: { enable: true, color: "#000000", opacity: 0.4, distance: 150, width: 1 },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 200, duration: 0.4 },
      push: { quantity: 4 },
    },
  },
};

const ParticleComponent = (props) => {
  return (
    <Box>
      <Particles
        id="tsparticles"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        options={props.theme === "light" ? optionsLight : optionsDark}
        init={async (engine) => {
          await loadLinksPreset(engine);
        }}
      />
    </Box>
  );
};

export default ParticleComponent;
