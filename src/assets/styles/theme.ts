import { ButtonTheme, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  basicWidth: "320px",

  color: {
    main: "white",
    sub: "#fff",
  },
};

const nextTheme: DefaultTheme = {
  basicWidth: "320px",

  color: {
    main: "#1c1f25",
    sub: "#fff",
  },
};

const buttonTheme: ButtonTheme = {
  background: "#ddd",
  color: "#000",
};

export { theme, nextTheme, buttonTheme };
