import '@fontsource/kaushan-script';
import '@fontsource/sirin-stencil';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*::before, *::after {
        margin:0;
        padding:0
    }

    body {
        font-family: "Sirin Stencil";
        overflow-x: hidden;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

`;
 
export default GlobalStyle;