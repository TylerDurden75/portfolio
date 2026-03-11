import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaQueries } from "./Theme";
import { Iceberg, Mountain } from "./AllSvgs";

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: transparent;
  backdrop-filter: blur(6px);
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  ${mediaQueries(60)`
    height: 55vh;
  `};

  ${mediaQueries(50)`
    width: 52vw;
    height: max-content;
    min-height: 50vh;
  `};

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
    font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
    font-size:calc(1em + 2vw);
    margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
    font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
    font-size:calc(0.8em + 1vw);
      svg{
        width:30px;
        height:30px;
      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  &* > :first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  text-align: justify;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
    font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(30)`
    font-size:calc(0.6em + 1vw);
  `};

  ${mediaQueries(25)`
  font-size:calc(0.5em + 1vw);
  `};

  strong {
    margin-bottom: 0.35rem;
    text-transform: uppercase;
    font-size: 0.85em;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`;

const ListBlock = styled(Description)`
  font-size: calc(0.5em + 0.75vw);
  padding: 0.25rem 0;
  line-height: 1.35;

  strong {
    font-size: 0.9em;
  }

  ul {
    margin-top: 0.2rem;
  }

  li {
    margin-bottom: 0.15rem;
  }

  ${mediaQueries(50)`
    font-size: calc(0.6em + 0.9vw);
  `};

  ${mediaQueries(30)`
    font-size: calc(0.45em + 0.85vw);
  `};

  ${mediaQueries(25)`
    font-size: calc(0.4em + 0.75vw);
  `};
`;

const SkillsComponent = (props) => {
  const { id, title, description, subTitle, list, use, tools } = props.skills;
  return (
    <Main>
      <Title>
        {id === 1 ? (
          <Mountain width={45} height={45} />
        ) : (
          <Iceberg width={45} height={45} />
        )}
        {title}
      </Title>
      <Description>{description}</Description>
      <ListBlock>
        <strong>{subTitle}</strong>
        <ul>
          {list.map((l, idx) => {
            return <li key={idx}>{l}</li>;
          })}
        </ul>
      </ListBlock>
      <ListBlock>
        <strong>{use}</strong>
        <ul>
          {tools.map((t, id) => {
            return <li key={id}>{t}</li>;
          })}
        </ul>
      </ListBlock>
    </Main>
  );
};

export default SkillsComponent;
