import styled from 'styled-components';
import Image from 'next/image';

export const StyledButton = styled.button`
    margin: 10px 0;
    background-color: #00575F;
    color: #fff;
    width: 100%;
    height: 35px;
    border-radius: 12.5px;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center
`

export const ProductContainer = styled.div`
  margin-top: 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 5px;
`;

export const ProductRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled(Image)`
   width: 100%;
   object-fit: contain;
`;

export const QuantityContainer = styled.div`
  margin-top: 2px;
  display: flex;
  justify-content: center;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductHeader = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
`

export const ProductTitle = styled.div`
  font-size: 14px;

`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingValue = styled.div`
  margin-right: 5px;
  font-size: 14px;
  font-weight: bold;
`;

export const DiscountContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

export const OriginalPrice = styled.div`
  text-decoration: line-through;
  color: #7d7d7d;
  font-size: 14px;
`;

export const FinalPrice = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

export const DiscountText = styled.div`
  font-weight: semibold;
  font-size: 14px;
  margin-left: 10px;
  color: #007a7c;
`;

export const FreeDelivery = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #007a7c;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const SaveButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #7d7d7d;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #7d7d7d;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

export const BuyNowButton = styled.button`
  margin: 0 auto;
  width: 133px;
  border: none;
  border-radius: 4px;
  background-color: #007a7c;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;


