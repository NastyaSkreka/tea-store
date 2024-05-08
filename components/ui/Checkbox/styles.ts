import styled from 'styled-components'

export const CheckboxButton = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
export const CheckboxSquare = styled.span<{ isChecked: boolean }>`
    width: 20px;
    height: 20px;
    border: 1px solid ${({ isChecked }) => (isChecked ? 'var( --primary-color)' : 'var(--backgroundGrayDark-color)')};
    background-color: ${({ isChecked }) => (isChecked ? 'var( --primary-color)' : 'transparent')};
    margin-right: 10px;
`;