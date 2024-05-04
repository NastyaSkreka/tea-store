import { useQuery } from '@tanstack/react-query';
import { 
    SimilarProductsContainer
} from './styles'
import { ProductService } from '@/lib/services/product/product.service';
import TeaCatalog from '@/components/ui/Catalog';

export default function SimilarProducts({productId}: {productId: number}) {

    const { data: similarProducts} = useQuery({
        queryKey: ['get similar products '],
        queryFn: () => ProductService.getSimilar(productId), 
      }); 

  return (
    <SimilarProductsContainer>
        <TeaCatalog products={similarProducts?.data} />
    </SimilarProductsContainer>
  )
}
