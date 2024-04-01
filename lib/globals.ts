"use client"

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Image from 'next/image';

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
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .container {
    position: relative;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
`;

export const PhoneTemplate = styled(Image)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
`

export const LayoutMainWrapper = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const MainWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 350px;
    background: var(--textSecondary-color);
    overflow: hidden;
    min-height: 620px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0px 10px;

`;

export const MainStyled = styled.main`
    border-radius: 38px;
    padding: 5px;
    width: 90%;
    height: 600px;
    object-fit: cover;
    background: ${props => props.color || 'var(--textSecondary-color)'}; 
    overflow: hidden;
    margin: 20px 0;
    z-index: 5;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    & ::-webkit-scrollbar {
        width: 5px;
    }

    & ::-webkit-scrollbar-thumb {
        background-color: transparent;
    }
`

const MainImage = styled.img`
  height: 97%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  border-radius: 50px;
`;

const MainContent = styled.div`
  border-radius: 60px;
  padding: 30px;
  width: 100%;
  height: 600px;
  object-fit: cover;
  background: var(--textSecondary-color);
  overflow: scroll;
  margin: 20px 0;
`;

const SecondaryContent = styled(MainContent)`
  background: var(--primary-color);
`;

const ScrollbarStyle = styled.main`
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

