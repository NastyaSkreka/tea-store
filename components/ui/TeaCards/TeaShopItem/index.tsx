import Image from 'next/image';
import {
  TeaShopCard,
  TeaShopName,
  PriceContainer,
  ProductPrice,
  Distance, 
  DeleteButton
} from './styles';
import Link from 'next/link';
import ProductRating from '@/components/ui/Rating';
import FavoriteButton from '@/components/ui/Button/FavoriteButton';
import { IProduct } from '@/lib/types/product.interface';
import { useProfile } from '@/lib/hooks/useProfile';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductService } from '@/lib/services/product/product.service';


export default function TeaShopItem({ product }: { product: IProduct}) {

    const { profile } = useProfile()
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: ['delete tea item'],
        mutationFn: () => ProductService.delete(product.id),
        onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ['get products'],
            });
          },
    });

    const handleDelete = () => {
        console.log("item deleted")
        mutate();
    };
    

  return (
    <TeaShopCard>
    {profile?.data.role !== "ADMIN" && <FavoriteButton productId={product.id}/>}  
      <Link href={`/product/${product.id}`}>
        <Image
          width={200}
          height={200}
          src={product.image}
          alt={product.name}
        />
      </Link>
      <TeaShopName>{product.name}</TeaShopName>
      <ProductRating reviews={product.reviews} />
      <PriceContainer>
      <Distance>{product.miles}</Distance>
      <ProductPrice>{product.price}$</ProductPrice>  
      { profile?.data.role === "ADMIN" && <DeleteButton onClick={handleDelete}>Delete</DeleteButton>}

      </PriceContainer>
    </TeaShopCard>
  );
}