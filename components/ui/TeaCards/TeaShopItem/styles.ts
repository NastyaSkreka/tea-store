import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";

export const TeaShopCard = styled.div`
  background-color: var(--backgroundGrayLight-color);
  position: relative;
  margin-bottom: 10px; 
  padding: 5px; 
`;

export const DeleteButton = styled(IoMdClose)`
    position: absolute;
    right: 0px;
    top: 0px;
    border-radius: 50%;
    border: 2px solid var(--textSecondary-color);
    background-color:var(--backgroundGrayLight-color);
    padding: 2px; 
    color: var(--primary-color);
    cursor: pointer;
`

export const Image = styled.img`
  margin-bottom: 8px; 
  width: 100%;
  object-fit: cover;
`;

export const TeaShopName = styled.div`
  font-size: 16px; 
  font-weight: 600;
  color: var(--deepBlue-color);
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px; 
  justify-content: space-between;
  font-size: 12px; 
  font-weight: 600;

`;



export const ProductPrice = styled.span`
  margin-left: 4px; 
  font-size: 14px; 
`;

export const Distance = styled.span`
  font-size: 12px; 
  font-weight: 600;
  color: var(--primary-color); 
`;