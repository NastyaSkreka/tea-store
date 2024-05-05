'use client';
import React from 'react';
import CartItem from '@/components/ui/TeaCards/CartItem';
import { useCart } from '@/lib/hooks/useCart';
import {
  TotalPriceValue,
  Title,
  CartContainer,
  TableHeader,
  CartHeadline,
  SimilarProductsContainer,
  EmptyCartInfo, 
  CatalogLink, 
} from './styles';
import Button from '../../../components/ui/Button';
import TeaShopItem from '../../../components/ui/TeaCards/TeaShopItem';
import { IProduct } from '@/lib/types/product.interface';
import { ICartItem } from '@/lib/types/cart.interface';
import { MainContent } from '@/lib/globals';
import Link from 'next/link';

export default function CartPage({ products }: { products: IProduct[] }) {
  const { items, total } = useCart();

  return (
    <MainContent>
      {items && items.length > 0 ? (
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
              items.map((product:ICartItem) => (
                <CartItem item={product} key={product.id} />
              ))}
          </tbody>
        </table>
      </CartContainer>
      <TotalPriceValue>Total: {total}$</TotalPriceValue>
      <Link href="payment">
        <Button color="green" label="Check out" />
      </Link>
      <Title>Recommended products</Title>
      <SimilarProductsContainer>
        {products
          .filter(
            (product) =>
              !items.map((item) => item.product.id).includes(product.id),
          )
          .slice(0, 5)
          .map((product) => (
            <TeaShopItem product={product} key={product.id} />
          ))}{' '}
      </SimilarProductsContainer>
      </>
        
      ) : (
        <EmptyCartInfo>
          <CartHeadline>Your cart is empty</CartHeadline>
          <CatalogLink href="/">View catalog</CatalogLink>
        </EmptyCartInfo>
      )}
     
    </MainContent>
  );
}
