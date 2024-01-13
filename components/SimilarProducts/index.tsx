'use client';
import React from 'react';
import similar from '@/public/image/similarpr.png';
import StarIcon from '@/public/start-icon';
import {
  SimilarProductsContainer,
  Title,
  ProductContainer,
  ProductImage,
  ProductDetails,
  ProductName,
  RatingContainer,
  RatingValue,
  Select,
} from './styles';

export default function SimilarProducts() {
  return (
    <SimilarProductsContainer>
      <Title>Similar products</Title>
      <ProductContainer>
        <ProductImage src={similar} alt="product" />
        <ProductDetails>
          <ProductName>pure Milk Tea</ProductName>
          <RatingContainer>
            <RatingValue>48</RatingValue>
            <StarIcon />
          </RatingContainer>
        </ProductDetails>
        <Select />
      </ProductContainer>
    </SimilarProductsContainer>
  );
}
