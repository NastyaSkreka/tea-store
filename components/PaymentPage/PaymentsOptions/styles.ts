import styled from 'styled-components';

export const Title = styled.div`
    margin: 10px 0 20px 0;
    font-weight: 600;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
`;

export const StyledCheckbox = styled.input`
    cursor: pointer;
    appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #00575F;
  transition: all 0.1s;

  &:checked {
    background-color: #00575F;
  }

`;

