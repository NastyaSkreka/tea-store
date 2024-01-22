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
export const NavItemActive  = styled.div`
  border-radius: 10px;
  padding: 5px;
`;

export const NavItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  &.active {
    background-color: #a0a0a0;
  }
`;


export const FooterContainer = styled.footer`
    margin-top: 23px;
`