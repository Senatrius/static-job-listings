import { createGlobalStyle } from "styled-components";

export const COLORS = {
  background: "hsl(180, 52%, 96%)",
  filterChip: "hsl(180, 31%, 95%)",
  primary: "hsl(180, 29%, 50%)",
  darkGray: "hsl(180, 14%, 20%)",
  lightGray: "hsl(180, 8%, 52%)"
}
export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 0.9375rem;
  }
`