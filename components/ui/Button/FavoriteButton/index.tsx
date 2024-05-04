import { useProfile } from '@/lib/hooks/useProfile';
import { UserService } from '@/lib/services/user.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AiFillHeart } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import {
    FavHeartContainer
  } from './styles';

export default function FavoriteButton({ productId }: { productId: number }) {
  const { profile } = useProfile();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['toggle favorite'],
    mutationFn: () => UserService.toggleFavorite(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get profile'],
      });
    },
  });
  
    if (!profile) return null;

  const isExists = profile?.data.favorites.some(
    (favorite) => favorite.id === productId,
  );

  return (
    <FavHeartContainer onClick={() => mutate()}>
        {isExists ? <AiFillHeart /> : <CiHeart />}
    </FavHeartContainer>
  );
}