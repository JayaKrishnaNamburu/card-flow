import { injectGlobal } from 'styled-components';
import latoRegular from './fonts/Lato-Regular.ttf';
import back from './images/1.png';

/* eslint no-unused-expressions: 0 */
injectGlobal`
@font-face {
    font-family: 'Lato';
    src: url(${latoRegular}) format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap; }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Lato';
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    background-image: url(${back}), linear-gradient(to left, #00d2ff, #3a7bd5);
    background-repeat: none;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input[type="number"] {
    -moz-appearance: none;
  }
`;
