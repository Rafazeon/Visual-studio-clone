import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto";
  }

  html {
    scroll-behavior: smooth;
    overflow: hidden;
  }

  body {
    background: #fff;
  }

  *::-webkit-scrollbar {
    width: 14px;
  }

  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  //494850
  //292836

  *::-webkit-scrollbar-thumb {
    background-color: #494850;
  }

  input:-internal-autofill-selected {
    background-color: transparent !important;
  }

  h1, h2, h3, h4, h5, span, p, a, li {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 18px;
  }

  .Toastify__toast-body {
    color: #717070 !important;
  }

  .Toastify__progress-bar {
    background: #b80000 !important;
  }
`;
