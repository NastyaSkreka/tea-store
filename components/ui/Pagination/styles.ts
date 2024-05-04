import styled from 'styled-components'

export const PaginationButton = styled.button<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    background-color: ${props => props.isActive ? 'var(--primary-color)' : 'var(--backgroundGrayDark-color)'};
    color: var(--textSecondary-color);
    margin-left: 15px;
`

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`