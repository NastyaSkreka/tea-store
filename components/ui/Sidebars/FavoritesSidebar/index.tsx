import { AnimatePresence } from 'framer-motion';
import { useProfile } from '@/lib/hooks/useProfile';
import {
  FavouritesSidebarWrapper,
  FavoritesItemsContainer,
  Overlay,
  CloseIcon,
} from './styles';
import TeaFavoriteItem from '../../TeaCards/TeaFavoriteItem';
import NotFoundText from '../../NotFoundText';
import { useLockBodyScroll } from '@/lib/hooks/useLockBodyScroll';
import { IProduct } from '@/lib/types/product.interface';

interface FavouritesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function FavouritesSidebar({
  isOpen,
  onClose,
}: FavouritesSidebarProps) {
  const { profile } = useProfile();
  useLockBodyScroll(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay style={{ opacity: isOpen ? 1 : 0 }} />
          <FavouritesSidebarWrapper
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          >
            <CloseIcon onClick={onClose} />
            <FavoritesItemsContainer>
              {profile && profile.data.favorites.length > 0 ? (
                profile.data.favorites.map((fav: IProduct) => (
                  <TeaFavoriteItem key={fav.id} product={fav} />
                ))
              ) : (
                <NotFoundText text="No favorite products yet" />
              )}
            </FavoritesItemsContainer>
          </FavouritesSidebarWrapper>
        </>
      )}
    </AnimatePresence>
  );
}
