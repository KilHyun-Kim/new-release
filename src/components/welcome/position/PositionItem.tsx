import React from "react";
import styled from "styled-components";

type DataProps = {
  data: {
    position: string;
    index: number;
  };
};

const PositionItemWrap = styled.div`
  display: inline-block;
  width: 100%;
  height: 30vw;
  border: 1px solid #ddd;
  border-radius: 30px;
  line-height: 30vw;
`;

const PositionItem = ({ data }: DataProps) => {
  return (
    <PositionItemWrap>
      <p>{data.position}</p>
      <p>{data.index}</p>
    </PositionItemWrap>
  );
};

export default PositionItem;
