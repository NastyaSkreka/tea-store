import styled from 'styled-components';
import Image from 'next/image';

export const StyledSection = styled.section`

`;

export const StyledImage = styled(Image)`
    position: absolute;
    top: 36%;
    left: 0px;
    width: 100%;
    height: 50%;
    object-fit: cover;
    transform: translateY(-80%);
`;

export const ContentWrapper = styled.div`
    margin-top: 270px; 
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
  font-size: 18px;
  font-weight: 700;
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

export const DescriptionContainer = styled.div`
  margin:5px 0;
  font-weight: 700;
  color: var(--primary-color); 
`;

export const DescriptionText = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
`;

export const ReviewContainer = styled.div`
  background: var(--backgroundGrayLight-color);
  padding: 5px;
  margin-bottom: 3px;
`

export const ReviewAuthor = styled.div`
    font-weight: 600; 
    margin-bottom: 5px;
`