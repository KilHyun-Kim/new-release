import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const DUSK_BLUE: string = "#174b7d";
export const SANDY_YELLOW: string = "#F4ED7A";
export const PALE_GRAY: string = "#F4F6F8";
export const GREY_GREEN: string = "#8B8C8A";

const GlobalStyle = createGlobalStyle`
    ${normalize};

    html,
    body{
        overflow:hidden;
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
