import React from "react";
import styled from "styled-components";
import { mediaQueries } from "./Theme";

const Eyes = styled.div`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;

  ${mediaQueries(50)`
  top: 20%;
    transform: scale(0.8);
  `};

  ${mediaQueries(30)`
    top: 20%;
    transform: scale(0.5);
    display: flex;
  `};
`;

const Eye = styled.div`
  width: 240px;
  height: 120px;
  background: white;
  display: inline-block;
  margin: 40px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;

const Ball = styled.div`
  width: 40px;
  height: 40px;
  background: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 15px solid #333;
`;

const Look = () => {
  let balls = document.getElementsByClassName("iris");
  document.onmousemove = function (e) {
    let x = (e.clientX * 100) / window.innerWidth + "%";
    let y = (e.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = "translate(-" + x + ", -" + y + ")";
    }
  };

  return (
    <Eyes>
      <Eye>
        <Ball className="iris" />
      </Eye>
      <Eye>
        <Ball className="iris" />
      </Eye>
    </Eyes>
  );
};

export default Look;
