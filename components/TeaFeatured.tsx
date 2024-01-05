import React from 'react';
import TeaShopItem from '@/components/TeaShopItem';
import { useGetTeasQuery } from '@/lib/services/teaService';

export default function TeaFeatured() {
  const { data, error, isLoading } = useGetTeasQuery('');

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <section className="mt-5">
      <div className="text-md font-semibold text-teaBlue">
        Featured tea shops
      </div>
      <div className="-mx-4 mt-5 flex flex-wrap">
        {data.map((teaShop: any) => (
          <TeaShopItem key={teaShop.id} {...teaShop} />
        ))}
      </div>
    </section>
  );
}
