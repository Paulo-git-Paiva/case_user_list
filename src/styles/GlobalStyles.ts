import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 1rem;
    background-color: #f9f9f9;
  }
`;

export default GlobalStyles;