import React from "react";
import styled from "styled-components";

const Turnable = styled.div`
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 160px;
  height: 140px;
  background: black;
  border: 1px solid white;
  border-radius: 10%;

  transform: translate(-40%, -35%) scale(0.4);
`;

const Disc = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 106px;
  height: 106px;
  background: #2d3e4f;
  border-radius: 50%;
  animation: spin 4s linear infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};

  &:after {
    content: "";
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background: #ebebeb;
    border: solid 2px #db3a3a;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ReflectRight = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  background-color: #36495d;
`;

const ReflectLeft = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  background-color: #36495d;
`;

const Groove = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  width: 85px;
  height: 85px;
  border: solid 1px #2d3e4f;

  &:before,
  &:after {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    border: solid 1px #2d3e4f;
  }

  &:before {
    content: "";
    width: 75px;
    height: 75px;
  }

  &:after {
    content: "";
    width: 65px;
    height: 65px;
  }
`;

const Label = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: #ffd600;

  &::before,
  &::after {
    content: "";
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
  }

  &::before {
    width: 7px;
    height: 7px;
    background: #ffd600;
    border: solid 1px rgb(180, 63, 64);
  }

  &::after {
    width: 30px;
    height: 16.5px;
    bottom: 16.5px;
    background: rgb(180, 63, 64);
    border-radius: 16.5px 16.5px 0 0;
  }
`;

const Title = styled.div`
  font-family: "Karla", sans-serif;
  font-size: 0.3em;
  text-align: center;
  z-index: 10;
  position: absolute;
  color: black;
  margin: 3px;
  margin-left: 6px;
`;

const Group = styled.div`
  font-family: "Karla", sans-serif;
  font-size: 0.3em;
  text-align: center;
  z-index: 10;
  position: absolute;
  color: black;
  top: 20px;
  left: 7px;
`;

const Button = styled.div`
  position: absolute;
  margin: auto;
  top: 110px;
  left: 90px;
  bottom: 0;
  right: 0;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  &:before {
    background: white;
    left: 10px;
  }

  &:after {
    background: white;
    left: 20px;
  }
`;

const Starter = styled.div`
  position: absolute;
  margin: auto;
  top: 110px;
  bottom: 0;
  right: 135px;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  &:before {
    background: white;
    left: 20px;
  }

  &:after {
    background: white;
    left: 30px;
  }
`;

const Arm = styled.div`
  position: absolute;
  margin: auto;
  top: 25px;
  left: 120px;
  bottom: 220px;
  right: 0;
  width: 15px;
  height: 22px;
  background: #b7b6b6;
  border-radius: 10%;
  transform: rotate(20deg);

  animation: ${(props) =>
    props.click ? "oscillating 2s linear infinite" : "none"};

  @keyframes oscillating {
    0% {
      transform: rotate(20deg);
    }
    30% {
      transform: rotate(20.5deg);
    }
    60% {
      transform: rotate(20deg);
    }
    90% {
      transform: rotate(20.5deg);
    }
    100% {
      transform: rotate(20deg);
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    margin: auto;
    background: #b7b6b6;
  }

  &:before {
    left: 0;
    right: 1px;
    top: 20px;
    width: 4px;
    height: 80px;
  }

  &:after {
    left: 0px;
    right: 0px;
    bottom: 0;
    top: 100px;
    width: 10px;
    height: 15px;
    border-radius: 50%;
  }
`;

const Pitch = styled.div`
  position: absolute;
  margin: auto;
  width: 10px;
  height: 60px;
  background: white;
  top: 42px;
  left: 140px;

  &::before {
    content: "";
    position: absolute;
    margin: auto;
    background: black;
  }

  &:before {
    left: 0;
    right: 1px;
    top: 5px;
    width: 2px;
    height: 50px;
  }
`;

const Vinyl = (props) => {
  return (
    <Turnable>
      <Disc click={props.click}>
        <ReflectLeft
          style={{ clipPath: "polygon(50% 50%, 0 75%, 10% 100%)" }}
        />
        <ReflectRight
          style={{ clipPath: "polygon(90% 0, 50% 50%, 100% 25%)" }}
        />
        <Groove />
        <Label>
          <Title>TJ DEV</Title>
          <Group>Vue&TS</Group>
        </Label>
      </Disc>
      <Button />
      <Starter />
      <Pitch />
      <Arm click={props.click} />
    </Turnable>
  );
};

export default Vinyl;
