import styled from 'styled-components';
import Image from 'next/image';

export const ItemContainer = styled.div`
 margin: 10px;
  background-color: var(--backgroundGrayLight-color);
  border-radius: 8px;
  padding: 5px;
  display: flex;
  align-items: center;

`;

export const QuantityColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`

export const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const QuantityIconWrapper = styled.div`
    background-color: var(--primary-color);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: var(--textSecondary-color)
    }
`

export const QuantityValue = styled.div`
    font-size: 14px;
    font-weight: 700;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const ProductImage = styled(Image)`
  object-fit: cover;
`;


export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductHeader = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 7px;
`;

export const ProductTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
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
  margin-bottom: 7px;
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
  color: var(--primary-color);
`;

export const FreeDelivery = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
  color: var(--primary-color);
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;
`;


export const RemoveButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #7d7d7d;
  padding: 5px 8px;
  font-size: 12px;
  font-weight: bold;
  color: var(--textSecondary-color);
  cursor: pointer;
`;

export const BuyNowButton = styled.button`
  margin: 0 auto;
  width: 70px;
  border: none;
  border-radius: 4px;
  background-color: var(--primary-color);
  padding: 5px 8px;
  font-size: 12px;
  font-weight: bold;
  color: var(--textSecondary-color);
  cursor: pointer;
`;


