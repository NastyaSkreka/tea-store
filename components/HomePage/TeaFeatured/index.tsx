'use client'
import React from 'react';
import { useGetTeasQuery } from '@/lib/services/teaService';
import TeaShopItem from '@/components/HomePage/TeaShopItem';
import {
    FeaturedTeaSection, 
    FeaturedTeaTitle,
    TeaShopListContainer, 
} from './styles'


export default function TeaFeatured() {
  const { data, error, isLoading } = useGetTeasQuery('');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <FeaturedTeaSection>
      <FeaturedTeaTitle>Featured tea shops</FeaturedTeaTitle>
      <TeaShopListContainer>
        {data &&
          data.map((teaShop: any, index: number) => (
            <TeaShopItem key={index} {...teaShop} />
          ))}
      </TeaShopListContainer>
    </FeaturedTeaSection>
  );
}
