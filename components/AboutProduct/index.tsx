"use client"
import React from 'react';
import product from '@/public/image/product.png';
import Minus from '@/public/minus-icon';
import Plus from '@/public/plus-icon';
import StarIcon from '@/public/start-icon';
import Clock from '@/public/clock-icon';
import {
    StyledImage,
    StyledSection,
    ContentWrapper,
    DetailsContainer,
    Title,
    RatingContainer,
    DurationContainer,
    DurationValue,
    QuantityContainer,
    QuantityValue,
    InfoContainer,
    DescriptionContainer,
    DescriptionText,
    RatingValue
} from './styles'

export default function AboutProduct() {
  return (
    <StyledSection>
    <StyledImage src={product} alt="product" />
    <ContentWrapper>
      <DetailsContainer>
        <InfoContainer>
          <Title>Spiced Lemon Tea</Title>
          <RatingContainer>
             <RatingValue>48</RatingValue>
            <StarIcon />
          </RatingContainer>
          <DurationContainer>
            <Clock />
            <DurationValue>24 min</DurationValue>
          </DurationContainer>
        </InfoContainer>
        <QuantityContainer>
          <Minus />
          <QuantityValue>2</QuantityValue>
          <Plus />
        </QuantityContainer>
      </DetailsContainer>
        <DescriptionContainer>Description</DescriptionContainer>
        <DescriptionText>
          A conversation is never complete until you have a cup of chai
          Friends visiting each other
        </DescriptionText>
    </ContentWrapper>
  </StyledSection>
);
  
}
