import React, { Dispatch, SetStateAction, useCallback } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import TechItem from "./tech/TechItem";

type TechSelectType = {
  setClear: Dispatch<SetStateAction<boolean>>;
};

const TechSelectWrap = styled.div`
  background-color: #eaeef0;
`;

const TechSelectTitle = styled.p`
  margin: 0;
`;

const TechSelectList = styled.div`
  width: 100%;
  padding: 0 16px;
  min-height: 100vh;
`;

const TechSelect = ({ setClear }: TechSelectType) => {
  const handlePrev = useCallback(() => {
    setClear(false);
  }, [setClear]);

  return (
    <TechSelectWrap>
      <TechSelectTitle>Select the Tech</TechSelectTitle>
      <TechSelectList>
        <TechItem></TechItem>
      </TechSelectList>
      <Button>Complete</Button>
    </TechSelectWrap>
  );
};

export default TechSelect;
