import React from 'react';
import {
  Row,
  ProductImage,
  FinalPrice,
  QuantityValue,
  QuantityIconWrapper,
  QuantityContainer, 
  DeleteIcon
} from './styles';
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
    <tr>
      <td>
    <Row>
      <ProductImage
            width={100}
            height={80}
            src={item.product.image}
            alt={item.product.name}
          />
        {item.product.name}
        </Row>
    </td>
      <td>
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
      </td>
      <td>
      <FinalPrice>{item.product.price}$</FinalPrice>
      </td>
      <td>
        <DeleteIcon onClick={() => removeFromCart({ id: item.id })} /> </td>
    </tr>
  );
}
