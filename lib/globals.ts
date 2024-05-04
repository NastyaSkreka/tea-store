"use client"

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const colors = {
    primary: '#00575F',
    deepBlue: '#106269',
    error: "#ff0000", 
    textPrimary: "#0000", 
    textSecondary: "#ffff", 
    backgroundGrayLight: "#edf0ef", 
    backgroundGrayDark: "#767676"
};

export const GlobalStyle = createGlobalStyle`
    :root {
    --primary-color: ${colors.primary};
    --deepBlue-color: ${colors.deepBlue};
    --error-color: ${colors.error};
    --textPrimary-color: ${colors.textPrimary}; 
    --textSecondary-color: ${colors.textSecondary}; 
    --backgroundGrayLight-color: ${colors.backgroundGrayLight}; 
    --backgroundGrayDark-color: ${colors.backgroundGrayDark};
    }

  body {
    margin: 0;
    padding: 0;
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
  ol, 
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

`;

export const Container = styled.div`
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 0 20px;

`;

export const MainContent = styled.div`
    height: 100vh;
`
export const MainStyled = styled.main`  
    background: ${props => props.color || 'var(--textSecondary-color)'}; 
`


