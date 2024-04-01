import AboutProduct from '@/components/ProductPage/AboutProduct';
import PageLayout from '@/components/ui/pageLayout';
import { ProductService } from '@/lib/services/product/product.service';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import AddToCartButton from '../ui/AddToCartButton';

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();

  const { data } = useQuery({
    queryKey: ['get product by id '],
    queryFn: () => ProductService.getById(productId),
  });

  console.log('ProductPage data => ', data);
  return (
    <PageLayout
      headerVariant="full"
      path="product"
      buttonLink="/cart"
      button={<AddToCartButton product={data} />}
    >
      {<AboutProduct product={data} />}
      {/*  <SimilarProducts/>*/}
    </PageLayout>
  );
}
