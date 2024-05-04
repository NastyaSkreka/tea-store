"use client"
import React from 'react';
import CartItem from '@/components/ui/TeaCards/CartItem';
import { useCart } from '@/lib/hooks/useCart';
import { TotalPriceValue,Title,  CartContainer, TableHeader, CartHeadline, SimilarProductsContainer } from './styles';
import Button from '../../../components/ui/Button';
import TeaShopItem from '../../../components/ui/TeaCards/TeaShopItem';
import { IProduct } from '@/lib/types/product.interface';

export default function CartPage({products}: { products: IProduct[] }) {

  const { items, total } = useCart();

  return (
    <>
    <CartHeadline>Your cart</CartHeadline>
      <CartContainer>
        <table>
          <thead>
            <tr>
              <TableHeader>Product</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader></TableHeader>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((product) => (
                <CartItem item={product} key={product.id} />
              ))}
          </tbody>
        </table>
      </CartContainer>
      <TotalPriceValue>Total: {total}$</TotalPriceValue>
      <Button color="green" label="Check out"/>
      <Title>Recommended products</Title>
      <SimilarProductsContainer>
      {
        products.filter(
            product => !items.map(item => item.product.id).includes(product.id)
        )
        .slice(0, 5)
        .map(product => 
        <TeaShopItem product={product} key={product.id}/>
         )   
      } </SimilarProductsContainer>
    </>
  );
}
