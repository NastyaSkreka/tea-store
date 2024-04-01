import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 10px 0;
  background-color: var(--primary-color);
  color: var(--textSecondary-color);
  width: 100%;
  height: 35px;
  border-radius: 12.5px;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 35%);
  
`
export const TotalPriceValue = styled.div`
    margin-top: auto; 
    font-weight: 700;
    font-size: 18px;
`;
