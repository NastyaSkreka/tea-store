import { useQuery } from '@tanstack/react-query';
import { SimilarProductsContainer } from './styles';
import { ProductService } from '@/lib/services/product/product.service';
import TeaCatalog from '@/components/Catalog';
import Loader from '../ui/Loader';

export default function SimilarProducts({ productId }: { productId: number }) {
  const { data: similarProducts, isLoading } = useQuery({
    queryKey: ['get similar products '],
    queryFn: () => ProductService.getSimilar(productId),
  });

  return (
    <SimilarProductsContainer>
      {isLoading ? (
        <Loader />
      ) : (
        similarProducts && <TeaCatalog products={similarProducts?.data} />
      )}
    </SimilarProductsContainer>
  );
}
