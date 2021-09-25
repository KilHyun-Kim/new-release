import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PositionSelect from "./PositionSelect";
import TechSelect from "./TechSelect";

const WelcomeWrap = styled.div`
  height: 100vh;
  padding: 10px;
`;

function Welcome() {
  const [clear, setClear] = useState<boolean>(false);
  useEffect(() => {
    // localStorage 로 먼저 구현 예정
  }, []);
  return (
    <WelcomeWrap>
      {clear ? (
        <TechSelect setClear={setClear}></TechSelect>
      ) : (
        <PositionSelect setClear={setClear}></PositionSelect>
      )}
    </WelcomeWrap>
  );
}

export default Welcome;
