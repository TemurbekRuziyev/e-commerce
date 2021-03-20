import styled, { createGlobalStyle } from 'styled-components';

export const AppContainer = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 2rem 6rem;

  @media only screen and (max-width: 60.625em) {
    padding: 1rem;
  }
`;

export const GlobalStyles = createGlobalStyle`
  a { 
    text-decoration: none;
    color: black;
  }
  * { 
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; //1rem: 10px

    @media only screen and (max-width: 60.625em) {
      font-size: 56.25%;
    }
  }
`;
