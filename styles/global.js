import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  } 

  :root {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};

    font-size: 62.5%;

    --swiper-navigation-size: 4rem;
    --swiper-theme-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  html, body, header, main, form, footer, input {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`