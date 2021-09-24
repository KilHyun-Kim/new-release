// 반응형 웹을 위한 디바이스 크기

type breakPointsType = {
  IPHONE5: string;
  MOBILE: string;
  TABLET: string;
  DESKTOP: string;
  LARGE_DESKTOP: string;
};

export const breakPoints: breakPointsType = {
  IPHONE5: "320px",
  MOBILE: "480px",
  TABLET: "768px",
  DESKTOP: "1600px",
  LARGE_DESKTOP: "1920px",
};

export const OVER_IPHONE5 = `@media (min-width: calc(${breakPoints.IPHONE5} + 1px))`;
export const OVER_MOBILE = `@media (min-width: calc(${breakPoints.MOBILE} + 1px))`;
export const OVER_TABLET = `@media (min-width: calc(${breakPoints.TABLET} + 1px))`;
export const OVER_DESKTOP = `@media (min-width: calc(${breakPoints.DESKTOP} + 1px))`;
export const UNDER_LARGE_DESKTOP = `@media (max-width: ${breakPoints.LARGE_DESKTOP})`;
export const UNDER_DESKTOP = `@media (max-width: ${breakPoints.DESKTOP})`;
export const UNDER_TABLET = `@media (max-width: ${breakPoints.TABLET})`;
export const UNDER_IPHONE5 = `@media (max-width: ${breakPoints.IPHONE5})`;

const media = {
  // media queries for mobile first
  OVER_IPHONE5,
  OVER_MOBILE,
  OVER_TABLET,
  OVER_DESKTOP,

  // media queries for desktop first.
  UNDER_LARGE_DESKTOP,
  UNDER_DESKTOP,
  UNDER_TABLET,
  UNDER_IPHONE5,
};

export default media;
