import React from 'react'
import cart from '@/public/image/cart.png';
import {
    ProductContainer, 
    ProductRow, 
    ProductImageContainer, 
    ProductImage,
    ProductDetailsContainer,
    ProductTitle, 
    RatingContainer,
    RatingValue, 
    DiscountContainer, 
    OriginalPrice,
    FinalPrice,
    DiscountText, 
    FreeDelivery, 
    ActionButtonsContainer, 
    SaveButton, 
    RemoveButton,
    BuyNowButton,
    ProductHeader, 
    StyledButton
} from './styles'
import Dropdown from '@/components/ui/Dropdown';
import StarIcon from '@/public/start-icon';



export default function CartItem() {
  return (
    <>
    <StyledButton>Proceed to pay</StyledButton>
    <ProductContainer>
        <ProductRow>
            <ProductImageContainer>
                <ProductImage width={100} height={115} src={cart} alt="cart" />
                <Dropdown 
                    label="Qty:2"
                    content={[
                    'Qty:3',
                    'Qty:4',
                    ]}/>
            </ProductImageContainer>
            <ProductDetailsContainer>
            <ProductHeader>
            <ProductTitle>
                Spiced Milk Tea
            </ProductTitle>
            <RatingContainer>
                <RatingValue>4.8</RatingValue>
                <StarIcon/>
            </RatingContainer>
            </ProductHeader>
            <DiscountContainer>
                <OriginalPrice>Rs.40</OriginalPrice>
                <FinalPrice>Rs.30</FinalPrice>
                <DiscountText>10% off</DiscountText>
            </DiscountContainer>
                <FreeDelivery>free delivery</FreeDelivery>
                <ActionButtonsContainer>
                    <SaveButton>Save</SaveButton>
                    <RemoveButton>Remove</RemoveButton>
                </ActionButtonsContainer>
                <BuyNowButton>Buy</BuyNowButton>
            </ProductDetailsContainer>
        </ProductRow>
    </ProductContainer>
    </>
  )
}
