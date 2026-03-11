import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  font-family: "Karla", sans-serif;
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  ${(props) =>
    props.$inHeader &&
    `
    position: relative;
    top: auto;
    left: auto;
    transform: none;
  `}
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 0;
  overflow: hidden;
  transition: 0.5s;
`;

const Nav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcf6f4;
  padding: 15px;
  transition: 0.5s;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  input:checked ~ ${Menu} {
    width: 220px;
  }

  @media screen and (max-width: 415px) {
    top: 0;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  margin: 0 10px;

  a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-weight: 400;
  }

  a:hover {
    font-weight: bold;
  }
`;

const Input = styled.input`
  width: 30px;
  height: 30px;
  cursor: pointer;
  opacity: 0;
`;

const Line = styled.span`
  position: absolute;
  left: 16px;
  width: 30px;
  height: 4px;
  border-radius: 50px;
  background-color: black;
  pointer-events: none;
  transition: 0.5s;

  input:checked ~ & {
    background-color: #db3a3a;
  }

  &:nth-child(2) {
    transform: translateY(-8px);
  }

  input:checked ~ &:nth-child(2) {
    transform: translateY(0) rotate(-45deg);
  }

  &:nth-child(3) {
    transform: translateY(8px);
  }

  input:checked ~ &:nth-child(3) {
    transform: translateY(0) rotate(45deg);
  }
`;

const MenuBox = ({ inHeader = false }) => {
  const [stack, setStack] = useState(true);
  const [about, setAbout] = useState(true);
  const [skills, setSkills] = useState(true);

  useEffect(() => {
    variousPath();
  }, []);

  const variousPath = () => {
    if (window.location.pathname === "/stack") {
      setStack(false);
    }
    if (window.location.pathname === "/about") {
      setAbout(false);
    }
    if (window.location.pathname === "/skills") {
      setSkills(false);
    }
  };

  return (
    <Box $inHeader={inHeader}>
      <Nav>
        <Input type="checkbox" />
        <Line />
        <Line />
        <Menu>
          {about && (
            <MenuItem>
              <Link to="/about">About</Link>
            </MenuItem>
          )}
          <MenuItem>
            <Link to="/work">Work</Link>
          </MenuItem>
          {skills && (
            <MenuItem>
              <Link to="/skills">Skills</Link>
            </MenuItem>
          )}
          {stack && (
            <MenuItem>
              <Link to="/stack">Stack</Link>
            </MenuItem>
          )}
        </Menu>
      </Nav>
    </Box>
  );
};

export default MenuBox;
