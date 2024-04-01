import React from 'react';
import {
  ItemContainer,
  Row,
  ProductImage,
  ProductDetailsContainer,
  ProductTitle,
  DiscountContainer,
  OriginalPrice,
  FinalPrice,
  DiscountText,
  FreeDelivery,
  ActionButtonsContainer,
  RemoveButton,
  BuyNowButton,
  ProductHeader,
  QuantityValue,
  QuantityIconWrapper,
  QuantityContainer,
  QuantityColumn,
} from './styles';
import Link from 'next/link';
import { useActions } from '@/lib/hooks/useActions';
import { useCart } from '@/lib/hooks/useCart';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { ICartItem } from '@/lib/types/cart.interface';

export default function CartItem({ item }: { item: ICartItem }) {
  const { removeFromCart, changeQuantity } = useActions();
  const { items } = useCart();
  const quantity = items.find((cartItem) => cartItem.id == item.id)?.quantity;

  return (
    <ItemContainer>
      <Row>
        <QuantityColumn>
          <ProductImage
            width={100}
            height={80}
            src={item.product.image}
            alt={item.product.name}
          />
          <QuantityContainer>
            <QuantityIconWrapper
              onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
            >
              <FaMinus />
            </QuantityIconWrapper>
            <QuantityValue>{quantity}</QuantityValue>
            <QuantityIconWrapper
              onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
            >
              <FaPlus />
            </QuantityIconWrapper>
          </QuantityContainer>
        </QuantityColumn>
        <ProductDetailsContainer>
          <ProductHeader>
            <ProductTitle>{item.product.name}</ProductTitle>
          </ProductHeader>
          <DiscountContainer>
            <OriginalPrice>Rs.40</OriginalPrice>
            <FinalPrice>{item.product.price}$</FinalPrice>
            <DiscountText>10% off</DiscountText>
          </DiscountContainer>
          <FreeDelivery>free delivery</FreeDelivery>
          <ActionButtonsContainer>
            <Link href="/total">
              <RemoveButton onClick={() => removeFromCart({ id: item.id })}>
                Remove
              </RemoveButton>
            </Link>
            <Link href="/total">
              <BuyNowButton>Buy</BuyNowButton>
            </Link>
          </ActionButtonsContainer>
        </ProductDetailsContainer>
      </Row>
    </ItemContainer>
  );
}
