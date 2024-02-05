import styled from 'styled-components';

export const NavigateContainer = styled.div`
    margin: 20px 0 40px 0;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PointContainer = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid #00575F;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
        background-color: #00575F;
      }
    `;



export const Divider = styled.div`
    border-bottom: 3px solid #EDF0EF;
    flex: 1;
`;

export const NavItem = styled.div`
    margin-top: 10px;
    font-weight: 600;

`