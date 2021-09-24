import styled, { css } from "styled-components";
import { useMemo } from "react";
import { UNDER_TABLET } from "../../assets/styles/mixin/media";
import {
  DUSK_BLUE,
  SANDY_YELLOW,
  GREY_GREEN,
  PALE_GRAY,
} from "../../assets/styles/global-styles";

type ButtonProps = {
  children: string;
  type?: string;
  width?: number | string;
  height?: number | string;
  fontSize?: number | string;
  color?: string;
  background?: string;
  fontWeight?: number | string;
  style?: any;
  onClick?: () => void;
};

type buttonType = {
  theme: {
    color: string;
    background: string;
  };
};

export const commonButtonCSS = css<buttonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 60px;
  border-radius: 30px;
  padding-left: 0.6em;
  padding-right: 0.6em;
  color: ${({ theme }) => theme.color || "#24497b"};
  background: ${({ theme }) => theme.background};
  font-size: 18px;
  letter-spacing: -0.9px;

  ${UNDER_TABLET} {
    height: 53px;
    font-size: 14px;
  }
`;
const CustomButton = styled.button`
  ${commonButtonCSS}
`;

export const buttonTypes = {
  BLUE: "BLUE",
  YELLOW: "YELLOW",
  GRAY: "GRAY",
};

const blueTheme = {
  background: DUSK_BLUE,
  color: "#fff",
};

const yellowTheme = {
  background: SANDY_YELLOW,
  color: "#fff",
};

const grayTheme = {
  background: GREY_GREEN,
  color: "#24497b",
};

function Button({
  children,
  type,
  width,
  height,
  fontSize,
  color,
  background,
  fontWeight,
  style,
  onClick,
  ...rest
}: ButtonProps) {
  // button 마다 테마 변경하는 방법 찾아보기
  //   const buttonThemeMemo = useMemo(() => {
  //     switch (type) {
  //       case buttonTypes.BLUE:
  //         return blueTheme;
  //       case buttonTypes.YELLOW:
  //         return yellowTheme;
  //       case buttonTypes.GRAY:
  //         return grayTheme;
  //       default:
  //         return grayTheme;
  //     }
  //   }, [type]);

  return (
    <CustomButton
      style={{
        width: typeof width === "number" ? width + "px" : width,
        height: typeof height === "number" ? height + "px" : height,
        fontSize: typeof fontSize === "number" ? fontSize + "px" : fontSize,
        fontWeight,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </CustomButton>
  );
}

export default Button;
