import styled from 'styled-components';
import Image from 'next/image';

export const SimilarProductsContainer = styled.div`
  margin-top: 3px;
`;

export const Title = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  color: #008080;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled(Image)`
  margin-right: 15px;
  width: 50px;
  height: 50px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  margin-bottom: 1px;
  font-size: 14px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingValue = styled.div`
  margin-right: 1px;
  font-size: 14px;
  font-weight: bold;
`;

export const Select = styled.div`
  margin-left: auto;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;
