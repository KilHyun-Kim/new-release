import React, { Dispatch, SetStateAction, useCallback } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import PositionItem from "./position/PositionItem";

type TechSelectProps = {
  setClear: Dispatch<SetStateAction<boolean>>;
};

const WelcomeTitle = styled.div`
  font-size: 32px;
`;

const POSITION_DATA = [
  {
    position: "front-end",
    index: 1,
  },
  {
    position: "back-end",
    index: 2,
  },
];

function PositionSelect({ setClear }: TechSelectProps) {
  const handleNext = useCallback(() => {
    setClear(true);
  }, [setClear]);

  return (
    <>
      <WelcomeTitle>Your Position?</WelcomeTitle>
      {POSITION_DATA.map((data) => (
        <PositionItem data={data} />
      ))}
      <Button onClick={handleNext}>frontend</Button>
    </>
  );
}

export default PositionSelect;
