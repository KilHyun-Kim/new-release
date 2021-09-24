import React, { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";

const WelcomeWrap = styled.div`
  height: 100vh;
  padding: 50px 20px;
`;
const WelcomeTitle = styled.div`
  text-align: center;
  font-size: 32px;
`;

const Welcome = () => {
  return (
    <WelcomeWrap>
      <WelcomeTitle>당신의 포지션은?</WelcomeTitle>
      <Button type={"BLUE"}>hi</Button>
    </WelcomeWrap>
  );
};

export default Welcome;
