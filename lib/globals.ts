"use client"

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: Raleway, sans-serif;
    font-size: 16px;

  }
  button,
  input,
  select,
  textarea,
  a {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

`;
