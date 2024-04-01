import Image from 'next/image';
import {
  TeaShopCard,
  TeaShopName,
  PriceContainer,
  ProductPrice,
  Distance
} from './styles';
import Link from 'next/link';
import ProductRating from '@/components/ui/ProductRating';
import FavoriteButton from '@/components/ui/FavoriteButton';
import { IProduct } from '@/lib/types/product.interface';


export default function TeaShopItem({ product }: { product: IProduct}) {
   console.log("TeaShopItem =>", product)
  return (
    <TeaShopCard>
      <FavoriteButton productId={product.id}/>
      <Link href={`/product/${product.id}`}>
        <Image
          width={147}
          height={150}
          src={product.image}
          alt={product.name}
        />
      </Link>
      <TeaShopName>{product.name}</TeaShopName>
      <ProductRating product={product} />
      <PriceContainer>
      <Distance>{product.miles}</Distance>
      <ProductPrice>{product.price}$</ProductPrice>  
      </PriceContainer>
    </TeaShopCard>
  );
}