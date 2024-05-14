"use client"
import CartPage from '@/app/cart/_components';
import PageLayout from '@/components/ui/Layouts/pageLayout';
import { ProductService } from '@/lib/services/product/product.service';
import { TypeProductDataFilters } from '@/lib/services/product/product.types';
import { useQuery } from '@tanstack/react-query';

export default async function Cart({
  searchParams,
}: {
  searchParams: TypeProductDataFilters;
}) {

    const { data} = useQuery({
        queryKey: ['get products'],
        queryFn: () => ProductService.getAll(searchParams),
      });

  return (
    <PageLayout>
        <h1>Hello</h1>
     {data && <CartPage products={data?.products} /> } 
    </PageLayout>
  );
}