import styled from 'styled-components';
import Image from 'next/image';

export const StyledSection = styled.section``;

export const StyledImage = styled(Image)`
  position: absolute;
  top: 17px;
  left: 19px;
  width: 312px;
  height: 287px;
  border-radius: 20px;
  object-fit: contain;
`;

export const ContentWrapper = styled.div`
  margin-top: 250px;
  padding-top: 20px;
`;

export const DetailsContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const RatingValue = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const DurationValue = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const QuantityValue = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 5px;
  font-weight: 700;
  color: #008080;
`;

export const DescriptionText = styled.div`
  width: 100%;
  font-size: 14px;
`;
