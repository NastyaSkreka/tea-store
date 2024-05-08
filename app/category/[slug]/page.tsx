'use client';
import TeaCatalog from '@/components/Catalog';
import PageLayout from '@/components/ui/Layouts/pageLayout';
import Loader from '@/components/ui/Loader';
import NotFoundText from '@/components/ui/NotFoundText';
import { MainContent } from '@/lib/globals';
import { ProductService } from '@/lib/services/product/product.service';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function Category() {
  const { slug } = useParams<{ slug: string }>();

  const { data: products, isLoading } = useQuery({
    queryKey: ['get products by category'],
    queryFn: () => ProductService.getByCategory(slug),
  });

  return (
    <PageLayout>
      <MainContent>
        {isLoading ? (
          <Loader />
        ) : (
          products && products.data.length > 0 ? <TeaCatalog products={products?.data} /> : 
          <NotFoundText text="No products in this category yet"/>
        )}
      </MainContent>
    </PageLayout>
  );
}
