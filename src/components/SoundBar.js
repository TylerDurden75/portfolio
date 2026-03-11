import React, { useRef, useState } from "react";
import { mediaQueries } from "./Theme";
import styled from "styled-components";
import Vinyl from "./Vinyl";

const music = `${process.env.PUBLIC_URL || ""}/assets/audio/ES_Flute Alors - La Boucle.mp3`;

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  height: 0%;
  left: 95%;
  top: 2rem;
  z-index: 10;

  ${mediaQueries(70)`
    left:92%;
  `};

  ${mediaQueries(60)`
    left:88%;
  `};

  ${mediaQueries(40)`
      left:80%;
      transform: scale(0.6);
  `};
`;

const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <Box onClick={() => handleClick()}>
      <Vinyl click={click} />
      <audio src={music} ref={ref} loop />
    </Box>
  );
};

export default SoundBar;
