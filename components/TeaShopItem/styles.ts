import styled from 'styled-components';

export const TeaShopCard = styled.div`
  position: relative;
  margin-bottom: 4px;
  width: 100%;
  padding: 0 4px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const FavHeartContainer = styled.div`
  position: absolute;
  right: 15px;
  top: -1px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: #D3D3D3; 
  padding: 2px;
`;

export const StyledImage = styled.img`
  margin-bottom: 2px;
  width: 100%;
  max-height: 164px;
  overflow: hidden;
  object-fit: cover; 
  border-radius: 8px; 
  border: 2px solid #008080; 
`;

export const TeaShopTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #106269;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
  font-size: 14px; 
  font-weight: bold;
  color: #003B40;
`;

export const ReviewsCount = styled.span`
  font-size: 14px; 
  font-weight: bold;
  color: #B7C1C2;  
  margin-left: 5px;
`;

export const Distance = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #003B40; 
`;