import styled from 'styled-components';

export const TeaShopCard = styled.div`
  position: relative;
  margin-bottom: 16px; 
  width: 100%;
  padding: 0 16px; 
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const FavHeartContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 0px;
  border-radius: 50%;
  border: 2px solid white;
  background-color:#D9D9D9;
  padding: 2px; 
`;

export const Image = styled.img`
  margin-bottom: 8px; 
  width: 100%;
  height: 164px; 
  object-fit: cover;
`;

export const TeaShopName = styled.div`
  font-size: 16px; 
  font-weight: 600;
  color: #106269;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px; 
  font-size: 12px; 
  font-weight: 600;
  color: #4a4a4a; 
`;


export const RatingValue = styled.span`
  margin-left: 4px; 
`;

export const ReviewCount = styled.span`
  margin-left: 4px; 
  font-size: 12px; 
  color: #B7C1C2;
`;

export const Distance = styled.span`
  font-size: 12px; 
  font-weight: 600;
  color: #19354d; 
`;