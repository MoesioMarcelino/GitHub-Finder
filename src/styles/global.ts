import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  body, -moz-user-input, button {
    font: 16px 'Rubik', sans-serif;
  }

  #root {
    max-width: 1360px;
    margin: 0 auto;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    cursor: pointer;
  }
`;
