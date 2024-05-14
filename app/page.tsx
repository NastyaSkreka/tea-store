"use client";

import ProductExplorer from '@/components/Explorer';
import Banner from '@/components/ui/Banner';
import PageLayout from '@/components/ui/Layouts/pageLayout';
import Loader from '@/components/ui/Loader';
import NotFoundText from '@/components/ui/NotFoundText';
import { ProductService } from '@/lib/services/product/product.service';
import { TypeProductDataFilters } from '@/lib/services/product/product.types';
import banner from '@/public/image/image1.png';
import { useQuery } from '@tanstack/react-query';

export default function Main({
  searchParams,
}: {
  searchParams: TypeProductDataFilters;
}) {

    const { data: products, isLoading} = useQuery({
        queryKey: ['get products'],
        queryFn: () => ProductService.getAll(searchParams),
      });

      console.log("products =>", products)
  return (
    <PageLayout>
      <Banner
        title="Unique collection Tea"
        image={banner}
        position="textFirst"
      />
      {isLoading ? (
          <Loader />
        ) : (
          products ? <ProductExplorer initialProducts={products} /> : 
          <NotFoundText text="No products in this category yet"/>
        )}
    </PageLayout>
  );
}