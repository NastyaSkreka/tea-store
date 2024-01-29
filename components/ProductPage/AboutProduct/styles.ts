import styled from 'styled-components';
import Image from 'next/image';

export const StyledSection = styled.section`

`;

export const StyledImage = styled(Image)`
    position: absolute;
    top: 52%;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: translateY(-80%);
`;

export const ContentWrapper = styled.div`
    margin-top: 270px; 
    padding-top: 20px; 
`;

export const DetailsContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
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
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const QuantityValue = styled.div`
    font-size: 20px;
    font-weight: 700;
`

export const DescriptionContainer = styled.div`
  margin-bottom: 5px;
  font-weight: 700;
  color: #008080; 
`;

export const DescriptionText = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
`;

