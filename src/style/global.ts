import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        border: 0;
        box-sizing:border-box;
        vertical-align: baseline;
        font-size: 100%;
    }

    :root{
        --black: #000000;
        --white: #ffffff;
        --purple: #7431f4;
        --pink: #ff00ff;
        --grey: #c5c5c5;
        --red: #ff0000;

        --ibm-sans: 'IBM Plex Sans', sans-serif;
    }

    button {
        cursor: pointer;
    }

    ol, ul {
        list-style: none;
    }`;

export default GlobalStyle;
