import {ApplyButton, 
        ApplyInput, 
        ApplyContainer,
        Title, 
        PlaceOrderButton,
        PromoCodeContainer
} from './style'

export default function PromoCode() {
    return (
     <PromoCodeContainer>
        <Title>Promo Code</Title>
        <ApplyContainer>
            <ApplyInput/>
            <ApplyButton>Apply</ApplyButton>
        </ApplyContainer>
        <PlaceOrderButton>Place Order</PlaceOrderButton>
    </PromoCodeContainer>
    );
}