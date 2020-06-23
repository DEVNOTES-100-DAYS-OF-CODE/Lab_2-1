import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
  *::after,
  *::before {
    box-sizing: border-box;
  }

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
}

div {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}

`;
