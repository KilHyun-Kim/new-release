import styled from "styled-components";
import { UNDER_TABLET, OVER_TABLET } from "../../assets/styles/mixin/media";

const MobileWrap = styled.div`
  width: 100%;
  display: none;
  ${UNDER_TABLET} {
    display: block;
  }
`;

const DesktopWrap = styled.div`
  width: 100%;
  display: none;
  ${OVER_TABLET} {
    display: block;
  }
`;

export function Mobile({ children }: any) {
  return <MobileWrap>{children}</MobileWrap>;
}

export function Desktop({ children }: any) {
  return <DesktopWrap>{children}</DesktopWrap>;
}
