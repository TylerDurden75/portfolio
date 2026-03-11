import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Box = styled.div`
  position: absolute;
  top: 70%;
  left: 6%;
  width: 85px;
  height: 135px;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: perspective(2500px);
`;

const Front = styled.div`
  position: absolute;
  width: 85px;
  height: 135px;
  transform-origin: left;
  overflow: hidden;
  box-shadow: 30px 0 50px rgba(30, 30, 30, 0.4);
  z-index: 1;
  background-color: black;

  &:hover {
    background-color: #924500;
    transition: 3.5s ease-out;

    &:before,
    &:after {
      content: "";
      position: absolute;
      background-color: #924500;
      width: 52.5px;
      height: 32.5px;
      border: 5px ridge #b05500;
      left: 11.2px;
    }
  }

  &:before {
    top: 12.5px;
  }
  &:after {
    top: 77px;
  }

  &:hover {
    transform: rotateY(-170deg);
  }
`;

const Cell = styled.div`
  position: absolute;
  width: 10px;
  height: 15px;
  top: 60px;
  left: 70.5px;
  border-radius: 1px;
  background-color: black;
  visibility: hidden;

  &:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: #f1c83c;
    width: 9px;
    height: 9px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  }

  &:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 3.5px;
    background-color: #333;
    top: 10px;
    left: 8.5px;
    visibility: visible;
  }
`;

const Back = styled.div`
  position: relative;
  background: rgba(58, 58, 58, 0.4);
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: none;

  &:after {
    position: relative;
    content: "EXIT";
    color: white;
    font-size: 0.5rem;
    border: 0.5px solid white;
    box-shadow: 0px 0px 7px green;
    bottom: 49.6%;
    left: 40%;
    background: green;
  }
`;

const Perspective = styled.div`
  position: absolute;
  top: 20%;
  width: 100%;
  height: 100%;
  background: white;
  -webkit-transform: perspective(100px) rotateX(45deg) scale(0.6);
`;

const Exit = styled.div`
  position: relative;
  width: 48%;
  height: 45%;
  left: 25.5%;
  top: 10%;
  background: yellow;
`;

const Door = () => {
  let history = useHistory();
  const handleClick = () => {
    let url = "/home";
    history.push(url);
  };

  return (
    <Box onClick={handleClick}>
      <Front>
        <Cell />
      </Front>
      <Back>
        <Perspective />
        <Exit />
      </Back>
    </Box>
  );
};

export default Door;
