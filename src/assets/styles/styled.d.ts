import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    basicWidth: string;
    color: {
      main: string;
      sub: string;
    };
  }
}
declare module "styled-components" {
  export interface ButtonTheme {
    background: string;
    color: string;
  }
}
