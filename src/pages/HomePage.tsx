import React from "react";
import styled from "styled-components";

type wrapType = {
  color: string;
};

//
const Wrap = styled.div<wrapType>`
  background: ${(props) => {
    return props.theme.color.main;
  }};

  color: ${(props) => {
    return props.color;
  }};
`;
const HomePage = () => {
  return <Wrap color={"#000"}>hi</Wrap>;
};

export default HomePage;
