import React from 'react';
import TeaShopItem from '@/components/TeaShopItem';
import { useGetTeasQuery } from '@/lib/services/teaService';
import { Section, Title, TeaShopList } from './styles';

export default function TeaFeatured() {
  const { data, error, isLoading } = useGetTeasQuery('');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Section>
      <Title>Featured tea shops</Title>
      <TeaShopList>
        {data &&
          data.map((teaShop: any) => (
            <TeaShopItem key={teaShop.id} {...teaShop} />
          ))}
      </TeaShopList>
    </Section>
  );
}
