import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url("./assets/fonts/Inter-Thin.woff2") format("woff2"),
    url("./assets/fonts/Inter-Thin.woff") format("woff");
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src: url("./assets/fonts/Inter-ExtraLight.woff2") format("woff2"),
    url("./assets/fonts/Inter-ExtraLight.woff") format("woff");
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src: url("./assets/fonts/Inter-Light.woff2") format("woff2"),
    url("./assets/fonts/Inter-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src: url("./assets/fonts/Inter-Regular.woff2") format("woff2"),
    url("./assets/fonts/Inter-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src: url("./assets/fonts/Inter-Medium.woff2") format("woff2"),
    url("./assets/fonts/Inter-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src: url("./assets/fonts/Inter-SemiBold.woff2") format("woff2"),
    url("./assets/fonts/Inter-SemiBold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src: url("./assets/fonts/Inter-Bold.woff2") format("woff2"),
    url("./assets/fonts/Inter-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src: url("./assets/fonts/Inter-ExtraBold.woff2") format("woff2"),
    url("./assets/fonts/Inter-ExtraBold.woff") format("woff");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #000000;
  }

  body {
    font-family: Inter, Arial, Helvetica, sans-serif;
    width: 100%;
    min-width: 44rem;
  }

  html {
    font-size: 62.5%;
  }

  ul {
    list-style: none;
  }
`