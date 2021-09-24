import React, { useMemo } from "react";
import styled from "styled-components";
import Main from "../components/home/Main";
import Welcome from "../components/welcome/Welcome";

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

/**
 * Welcome 값을 확인하여 보여주는 컴포넌트를 달리 보여줌.
 */

const TEST_AUTH: boolean = true;
function HomePage() {
  const authValue = useMemo(() => {
    if (!TEST_AUTH) {
      return true;
    } else {
      return false;
    }
  }, []);
  return <Wrap color={"#000"}>{authValue ? <Main /> : <Welcome />}</Wrap>;
}

export default HomePage;
