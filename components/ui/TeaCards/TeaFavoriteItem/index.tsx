import Image from 'next/image';
import {
  TeaShopCard,
  TeaShopName,
  ProductPrice, 
  ProductInfoContainer
} from './styles';
import Link from 'next/link';
import ProductRating from '@/components/ui/Rating';
import FavoriteButton from '@/components/ui/Button/FavoriteButton';
import { IProduct } from '@/lib/types/product.interface';
import AddToCartButton from '../../Button/AddToCartButton';


export default function TeaFavoriteItem({ product }: { product: IProduct}) {
  return (
    <TeaShopCard>
      <FavoriteButton productId={product.id}/>

      <Link href={`/product/${product.id}`}>
        <Image
          width={80}
          height={80}
          src={product.image}
          alt={product.name}
        />
      </Link>

    <ProductInfoContainer>
      <TeaShopName>{product.name}</TeaShopName>
      <ProductRating reviews={product?.reviews} />
       <AddToCartButton product={product}/>
      </ProductInfoContainer>

      <ProductPrice>{product.price}$</ProductPrice>  
    </TeaShopCard>
  );
}