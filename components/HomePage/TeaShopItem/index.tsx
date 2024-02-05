import React from 'react';
import mockup from '@/public/image/mockup.png';
import Image from 'next/image';
import StarIcon from '@/public/start-icon';
import FavHeart from '@/public/favheart-icon';
import {
    TeaShopCard,
    FavHeartContainer, 
    TeaShopName, 
    RatingContainer,
    RatingValue, 
    ReviewCount, 
    Distance
} from './styles'
import Link from 'next/link';

export default function TeaShopItem({ name }: any) {
  return (
    <TeaShopCard>
        <FavHeartContainer>
            <FavHeart />
        </FavHeartContainer>
        <Link href="/product">
            <Image width={153} height={168} src={mockup} alt="tea" />
        </Link>
        <TeaShopName>{name}</TeaShopName>
        <RatingContainer>
        <StarIcon />
        <RatingValue>4.5</RatingValue>
        <ReviewCount>1,200 reviews</ReviewCount>
        </RatingContainer>
        <Distance>3.8 miles</Distance>
  </TeaShopCard>
  );
}
