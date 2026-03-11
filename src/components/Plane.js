import React from "react";
import styled from "styled-components";
import { PaperPlane } from "./AllSvgs";

const Box = styled.div`
  width: 50px;
  height: 35px;
`;

const Plane = (props) => {
  return (
    <Box>
      <PaperPlane fill={props.fill} />
    </Box>
  );
};

export default Plane;
