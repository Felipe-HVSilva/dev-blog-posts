import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.color["blue-100"]};
    font-family:"Quicksand",sans-serif;
    -wekit-font-smoothing: antialiased;
  }

   body, input, textarea, button {
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }

  img {
    max-width: 100%;
    display: inline-block;
  }

  button {
    cursor: pointer
  }
  a {
    text-decoration: none;
  }
`
