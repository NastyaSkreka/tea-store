import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  background: #ffff;
  overflow: hidden;
  min-height: 620px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  & .wrapper-image {
    height: 97%;
    width: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    border-radius: 50px;
  }

  &  .main--wrapper--main,
  .main--wrapper--secondary {
    border-radius: 60px;
    padding: 30px;
    width: 100%;
    height: 600px;
    object-fit: cover;
    overflow: scroll;
    margin: 20px 0;
  }

  & .main--wrapper--main {
    background: #fff;
  }

  & .main--wrapper--secondary {
    background: #00575F;
  }

  &  main {
    &::-webkit-scrollbar {
      width: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
`;
