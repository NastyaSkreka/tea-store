import styled from 'styled-components';
import Image from 'next/image';
import { IoIosCloseCircleOutline } from "react-icons/io";

export const DeleteIcon = styled(IoIosCloseCircleOutline)`
    font-size: 24px;
    color: var(--backgroundGrayDark-color);
    cursor: pointer;
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

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingValue = styled.div`
  margin-right: 5px;
  font-size: 14px;
  font-weight: bold;
`;



export const FinalPrice = styled.div`
  font-weight: bold;
  font-size: 18px;
`;