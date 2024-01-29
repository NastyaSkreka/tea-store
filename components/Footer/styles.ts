import styled from 'styled-components';

export const FooterNav = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 90px;
    width: 300px;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    background-color: #fff;
    padding: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

export const NavItem = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s;

  svg {
    width: 20px;
    height: 20px;
  }

  &.active {
    border-radius: 10px;
    padding: 10px;
    background-color: #00575F;
  }
`;
