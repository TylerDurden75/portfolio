import React from "react";
import { mediaQueries } from "./Theme";
import styled from "styled-components";
import { motion } from "framer-motion";

const CenteredWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 100%;
  max-width: 62rem;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  ${mediaQueries(75)`
    max-width: 54rem;
  `};

  ${mediaQueries(60)`
    max-width: 90vw;
  `};

  ${mediaQueries(40)`
    max-width: 92vw;
  `};
`;

const Box = styled(motion.div)`
  width: 100%;
  max-width: 62rem;
  min-height: 28rem;
  padding: 0;
  pointer-events: auto;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  box-shadow:
    0 0.5rem 2rem rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${mediaQueries(75)`
    max-width: 54rem;
  `};

  ${mediaQueries(60)`
    max-width: 90vw;
    max-height: 85vh;
    overflow-y: auto;
  `};

  ${mediaQueries(40)`
    max-width: 92vw;
    max-height: 80vh;
  `};

  ${mediaQueries(25)`
    max-height: 75vh;
  `};
`;

const CardInner = styled.div`
  padding: 2.75rem 3rem 2.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  ${mediaQueries(60)`
    padding: 2.25rem 2.25rem 2rem;
  `};

  ${mediaQueries(40)`
    padding: 2rem 1.75rem 1.75rem;
  `};

  ${mediaQueries(25)`
    padding: 1.75rem 1.5rem 1.5rem;
  `};
`;

const AccentLine = styled.div`
  height: 3px;
  width: 3rem;
  background-color: ${(props) => props.theme.body};
  opacity: 0.9;
  margin-bottom: 1.5rem;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 0.5rem;

  ${mediaQueries(50)`
    flex-direction: column;
    gap: 1.25rem;
    align-items: flex-start;
  `};
`;

const HeaderText = styled.div`
  flex: 1;
  min-width: 0;
`;

const QrPlaceholder = styled.div`
  flex-shrink: 0;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;

  ${mediaQueries(60)`
    width: 5rem;
    height: 5rem;
  `};

  ${mediaQueries(50)`
    align-self: flex-start;
  `};
`;

const QrImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const Name = styled.h1`
  font-family: "Ubuntu Mono", monospace;
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin: 0 0 0.25rem 0;
  line-height: 1.2;

  ${mediaQueries(60)`
    font-size: 1.85rem;
  `};

  ${mediaQueries(40)`
    font-size: 1.6rem;
  `};
`;

const Title = styled.p`
  font-family: "Ubuntu Mono", monospace;
  font-size: 1.05rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0 0 0.15rem 0;
  opacity: 0.85;
`;

const Location = styled.p`
  font-family: "Ubuntu Mono", monospace;
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  margin: 0 0 0 0;
  opacity: 0.75;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: ${(props) => props.theme.body};
  opacity: 0.2;
  margin: 0 0 1.25rem 0;
`;

const Paragraph = styled.p`
  font-family: "Ubuntu Mono", monospace;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 1.1rem 0;
  text-align: justify;
  letter-spacing: 0.01em;

  ${mediaQueries(60)`
    font-size: 0.95rem;
  `};

  ${mediaQueries(40)`
    font-size: 0.9rem;
  `};

  ${mediaQueries(25)`
    font-size: 0.85rem;
  `};
`;

const SectionLabel = styled.span`
  font-family: "Ubuntu Mono", monospace;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0.5rem 0 0.4rem 0;
  opacity: 0.9;
  display: block;
`;

const Key = styled.strong`
  font-weight: 700;
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: 1.75rem 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.04);

  ${mediaQueries(60)`
    padding: 1.5rem 2.25rem;
  `};

  ${mediaQueries(40)`
    padding: 1.5rem 1.75rem;
  `};
`;

const FooterText = styled.p`
  font-family: "Ubuntu Mono", monospace;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin: 0;
  opacity: 0.95;
`;

const Description = () => {
  return (
    <CenteredWrapper>
      <Box
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.8 },
        }}
      >
        <CardInner>
          <HeaderRow>
            <HeaderText>
              <AccentLine />
              <Name>Thibault JEAN</Name>
              <Title>Senior Frontend Engineer</Title>
              <Location>Vue.js & TypeScript · Paris & Bordeaux</Location>
            </HeaderText>
            <QrPlaceholder>
              <QrImage
                src={`${process.env.PUBLIC_URL || ""}/assets/images/QRcode-cv.png`}
                alt="QR Code CV"
              />
            </QrPlaceholder>
          </HeaderRow>

          <Divider />

          <Paragraph>
            I design <Key>scalable frontend architectures</Key> for high-stakes,{" "}
            <Key>real-time</Key> systems: monitoring, dashboards, and data
            streaming. I drive measurable performance (TTI, bundle size,
            re-renders), clean architecture, solid testing (unit + E2E), and{" "}
            <Key>accessible UIs</Key>. I integrate REST and WebSocket APIs and
            step into backend when it adds value (Go).
          </Paragraph>

          <Paragraph>
            In production I've led <Key>Vue 2 → Vue 3</Key> migrations
            (Composition API, Pinia) with significant gains in stability and
            performance; built custom Vue UI libraries (<Key>Design System</Key>
            ) to replace heavy frameworks; and delivered <Key>60 FPS</Key>{" "}
            real-time monitoring and simulation (WebSocket, WebGL). I focus on{" "}
            <Key>code quality</Key> through code reviews, mentoring, and clear
            documentation (JSDoc, TypeDoc). I collaborate in Agile/Scrum with
            product, design, and backend teams.
          </Paragraph>

          <SectionLabel>What I bring</SectionLabel>
          <Paragraph style={{ marginTop: 0 }}>
            <Key>Scalable frontend architecture</Key> · Performance optimisation
            (TTI, bundle, re-renders) · <Key>Real-time</Key> applications
            (WebSocket, dashboards) · Unit & E2E testing, code reviews &
            mentoring · <Key>Accessible UIs</Key> · API integration & backend
            collaboration
          </Paragraph>
        </CardInner>

        <Footer>
          <FooterText>
            Open to <Key>complex frontend and real-time</Key> projects
            (freelance or full-time).
          </FooterText>
        </Footer>
      </Box>
    </CenteredWrapper>
  );
};

export default Description;
