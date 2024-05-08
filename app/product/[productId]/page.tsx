'use client';

import PageLayout from '@/components/ui/Layouts/pageLayout';
import AboutProduct from '../_components/AboutProduct';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/lib/services/product/product.service';
import Loader from '@/components/ui/Loader';
import { MainContent } from '@/lib/globals';

export default function Product() {
  const { productId } = useParams<{ productId: string }>();

  const { data: product, isLoading } = useQuery({
    queryKey: ['get product by id '],
    queryFn: () => ProductService.getById(productId),
  });

  return (
    <PageLayout>
      <MainContent>
      {isLoading ? <Loader /> : product && <AboutProduct product={product} />}
      </MainContent>
    </PageLayout>
  );
}
