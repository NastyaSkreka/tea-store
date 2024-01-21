import styled from 'styled-components';

export const FooterNav = styled.div`
    position: absolute;
    bottom: 30px;
    left: 25px;
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
  background-color: #00575F;
  padding: 5px;
`;

export const NavItem= styled.div`
    margin: 0 3px;
`
export const FooterContainer = styled.footer`
    margin-top: 23px;
`