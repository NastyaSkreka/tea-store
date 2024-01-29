import styled from 'styled-components';
import Image from 'next/image';

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
    background: #ffff;
    overflow: hidden;
    min-height: 620px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

`;

export const MainStyled = styled.main`
    border-radius: 38px;
    padding: 5px;
    width: 90%;
    height: 600px;
    object-fit: cover;
    background: ${props => props.color || '#fff'}; 
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
  background: #fff;
  overflow: scroll;
  margin: 20px 0;
`;

const SecondaryContent = styled(MainContent)`
  background: #00575F;
`;

const ScrollbarStyle = styled.main`
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

