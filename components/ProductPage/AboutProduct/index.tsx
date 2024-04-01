"use client"
import React from 'react';
import { FaRegClock } from "react-icons/fa";
import {
    StyledImage,
    StyledSection,
    ContentWrapper,
    DetailsContainer,
    Title,
    DurationContainer,
    DurationValue,
    InfoContainer,
    DescriptionContainer,
    DescriptionText,
    ReviewContainer,
    ReviewAuthor, 
} from './styles'
import ProductRating from '@/components/ui/ProductRating';

export default function AboutProduct({product} : {product: any }) {
  
  return (

    <StyledSection>
    <StyledImage width={500} height={350} src={product?.image} alt={product?.name} />
    <ContentWrapper>
      <DetailsContainer>
        <InfoContainer>
          <Title>{product?.name}</Title>
             <ProductRating product={product}/> 
          <DurationContainer>
            <FaRegClock />
            <DurationValue>{product?.time}</DurationValue>
          </DurationContainer>
        </InfoContainer>
      </DetailsContainer>
        <DescriptionContainer>Description</DescriptionContainer>
        <DescriptionText>
            {product?.description}
        </DescriptionText>
        <DescriptionContainer>Review</DescriptionContainer>
     {
        product?.reviews.map((review: any) => (
            <ReviewContainer key={review.id}>
                    <ReviewAuthor>
                    {review.user.email}
                    </ReviewAuthor>
                    <DescriptionText>
                    {review.text}
                    </DescriptionText>
            </ReviewContainer>
        ))
    }
      
    </ContentWrapper>
  </StyledSection>
   )
   }
       

