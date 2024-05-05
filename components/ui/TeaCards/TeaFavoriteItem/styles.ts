import styled from 'styled-components';

export const TeaShopCard = styled.div`
  position: relative;
  background-color: var(--backgroundGrayLight-color);
  padding: 7px 10px; 
  border-radius: 5px;
  display: flex;
  align-items:center;
  width: 100%;
  justify-content: space-between;
  margin: 3px 0;
`;


export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const TeaShopName = styled.div`
  font-size: 18px; 
  font-weight: 600;
  color: var(--deepBlue-color);
`;


export const ProductPrice = styled.span`
  font-size: 18px;
  font-weight: 600; 
  color: black;
`;


export const ProductInfoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`