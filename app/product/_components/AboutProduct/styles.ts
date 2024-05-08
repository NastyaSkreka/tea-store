import styled from 'styled-components';
import Image from 'next/image';

export const StyledSection = styled.section`
  margin: 20px 0;
  display: flex;
  gap: 10%;
  padding: 10px;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  flex-direction: cover;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ProductTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
`;

export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DurationValue = styled.div`
  font-size: 18px;
`;

export const ProductHeader = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
`;

export const DescriptionText = styled.div`
  max-width: 500px;
  font-size: 14px;
  line-height: 1.5;
`;

export const PriceText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const ReviewContainer = styled.div`
    margin: 10px 0;
    padding: 5px;
    background-color: var(--backgroundGrayLight-color)
    border: 5px;
`;

export const ReviewAuthor = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
`;
export const ReviewsText = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export const LeaveReviewButton = styled.button`
    margin: 10px 0;
    border-radius: 5px;
    width: 200px;
    height: 35px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: var(--textSecondary-color);
    background-color: var(--backgroundGrayDark-color);
    cursor: pointer;
`;

export const ProductReviewsWrapper = styled.div`
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`