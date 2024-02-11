import React from 'react'
import cart from '@/public/image/cart.png';
import {
    ItemContainer,
    FavouritesRow,
    FavouritesImage,
    FavouritesImageContainer,
    FavouritesDetailsContainer,
    FavouritesTitle, 
    RatingContainer,
    RatingValue, 
    DiscountContainer, 
    OriginalPrice,
    FinalPrice,
    FreeDelivery, 
    ActionButtonsContainer, 
    SaveButton, 
    RemoveButton,
    FavouritesHeader, 
} from './style'
import StarIcon from '@/public/start-icon';
import Heart from '@/public/heart-icon';


export default function FavouritesListItem() {
  return (
    <ItemContainer>
        <FavouritesRow>
            <FavouritesImageContainer>
                <FavouritesImage width={100} height={115} src={cart} alt="fav" />
            </FavouritesImageContainer>
            <FavouritesDetailsContainer>
            <FavouritesHeader>
            <FavouritesTitle>
                Spiced Milk Tea
            </FavouritesTitle>
            <RatingContainer>
                <RatingValue>4.8</RatingValue>
                <StarIcon/>
            </RatingContainer>
            </FavouritesHeader>
            <DiscountContainer>
                <OriginalPrice>Rs.40</OriginalPrice>
                <FinalPrice>Rs.30</FinalPrice>
            </DiscountContainer>
                <FreeDelivery>free delivery</FreeDelivery>
                <ActionButtonsContainer>
                    <SaveButton>Buy</SaveButton>
                    <RemoveButton>Remove</RemoveButton>
                </ActionButtonsContainer>
            </FavouritesDetailsContainer>
         
        </FavouritesRow>
        <Heart color="#00575F" fill="#00575F"/>
    </ItemContainer>
  )
}
