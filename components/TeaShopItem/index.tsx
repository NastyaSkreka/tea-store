import React from 'react';
import mockup from '@/public/image/mockup.png';
import StarIcon from '@/public/start-icon';
import FavHeart from '@/public/favheart-icon';
import {
  TeaShopCard,
  FavHeartContainer,
  StyledImage,
  RatingContainer,
  TeaShopTitle,
  ReviewsCount,
  Distance,
} from './styles';

export default function TeaShopItem({ name }: any) {
  return (
    <TeaShopCard>
      <FavHeartContainer>
        <FavHeart />
      </FavHeartContainer>
      <StyledImage src={mockup} width={153} height={164} alt="tea" />
      <TeaShopTitle>{name}</TeaShopTitle>
      <RatingContainer>
        <StarIcon />
        <span>4.5</span>
        <ReviewsCount>1,200 reviews</ReviewsCount>
      </RatingContainer>
      <Distance>3.8 miles</Distance>
    </TeaShopCard>
  );
}
