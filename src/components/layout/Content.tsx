import styled from "styled-components";
import { UNDER_TABLET, UNDER_IPHONE5 } from "../../assets/styles/mixin/media";

/**
 * 기본 컨텐츠 컨테이너, Responsive
 */
const Contents = styled.div`
  position: relative;
  width: 1220px; /* 디자인에는 1180px. 좌우 패딩을 위해 40 추가 */
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  ${UNDER_TABLET} {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }

  ${UNDER_IPHONE5} {
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

/**
 * 모바일에서 기본 패딩보다 한 단계 더 안쪽으로 들어가는 컨텐츠
 */
export const ContentsInnerMobile = styled.div`
  padding-left: 12.6px;
  padding-right: 12.6px;
`;

export default Contents;
