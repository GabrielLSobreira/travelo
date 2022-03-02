import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
   scroll-behavior: smooth;
  }
  
  body {
  margin: 1rem 2rem;
  font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style : none;
  }

  ::-webkit-scrollbar {
  width: 0.6rem;
  background-color: #14213d;
  }

  ::-webkit-scrollbar-thumb {
  background-color: #4539e6;
  }
`;
