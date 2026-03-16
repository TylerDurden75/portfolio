import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "./Theme";
import { motion } from "framer-motion";
import { Github, Hand } from "./AllSvgs";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    border: 1px solid ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
        width:16rem;
        margin-right:6rem;
        height:35vh;
       

  `};
  ${mediaQueries(40)`
        width:14rem;
        margin-right:4rem;
        height:35vh;
        
        

  `};
  ${mediaQueries(25)`
        width:12rem;
        margin-right:4rem;
        height:35vh;
padding:1.5rem 1.5rem;
        
        

  `};
  ${mediaQueries(20)`
        width:10rem;
        margin-right:4rem;
        height:40vh;
  `};
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const Highlight = styled.span`
  text-decoration: none;
  display: block;
  margin-top: 0.35rem;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.text};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.body};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Linki = styled(NavLink)`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 50px 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

const Git = styled(NavLink)`
  fill: ${(props) => props.theme.text};
  text-decoration: none;

  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
`;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, highlight, tags, demo, github } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>
        {description}
        {highlight && <Highlight>{highlight}</Highlight>}
      </Description>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        {demo ? (
          <Linki
            to={{ pathname: `${demo}` }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir le projet en ligne"
          >
            Visit
          </Linki>
        ) : (
          <Linki
            to={{ pathname: `${demo}` }}
            target="_blank"
            style={{ visibility: "hidden" }}
            aria-hidden="true"
          >
            Visit
          </Linki>
        )}
        {github ? (
          <Git
            to={{ pathname: `${github}` }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Code source sur GitHub"
          >
            <Github width={30} height={30} />
          </Git>
        ) : (
          <Hand width={30} height={30} aria-hidden="true" />
        )}
      </Footer>
    </Box>
  );
};

export default Card;
