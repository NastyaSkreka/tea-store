import Image from 'next/image';
import { motion } from 'framer-motion';
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
import { Role } from '@/lib/redux/user/user.interface';
import { useState } from 'react';

export default function TeaShopItem({ product }: { product: IProduct}) {

    const { profile } = useProfile()
    const queryClient = useQueryClient();
    const [isDeleted, setIsDeleted] = useState(false);

    const { mutate } = useMutation({
        mutationKey: ['delete tea item'],
        mutationFn: (productId: number) => ProductService.delete(productId),
        onSuccess: () => {
            queryClient.refetchQueries({
              queryKey: ['get products'],
            });
            setIsDeleted(true)
          },
         
    });

    const handleDelete = (productId: number) => {
        mutate(productId);
    }; 
    
  return (
    <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: isDeleted ? 0 : 1 }}
    transition={{ duration: 0.3 }}
    >
    <TeaShopCard>
    {profile?.data.role !== Role.ADMIN ? <FavoriteButton productId={product.id}/> :
    <DeleteButton onClick={() => handleDelete(product.id)}/>}  
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
      <Distance>{product.miles} miles</Distance>
      <ProductPrice>{product.price}$</ProductPrice>  
      </PriceContainer>
    </TeaShopCard>
    </motion.div>
  );
}