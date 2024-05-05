'use client';
import TeaShopItem from '@/components/ui/TeaCards/TeaShopItem';
import { FeaturedTeaSection } from './styles';
import { IProduct } from '@/lib/types/product.interface';


export default function TeaCatalog({ products}: { products: IProduct[]} ){
    
  return (
    <FeaturedTeaSection>
      {products?.map((product) => (
        <TeaShopItem key={product.id} product={product} />
      ))}
    </FeaturedTeaSection>
  );
}
