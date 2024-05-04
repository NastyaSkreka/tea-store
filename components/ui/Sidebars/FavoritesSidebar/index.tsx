import { motion, AnimatePresence } from 'framer-motion';
import { useProfile } from "@/lib/hooks/useProfile";
import { FavouritesSidebarWrapper , FavoritesItemsContainer, Overlay, CloseIcon} from './styles'
import Button from '../../Button';
import TeaFavoriteItem from './TeaFavoriteItem';

export default function FavouritesSidebar({ isOpen, onClose}: any ) {
  
    const { profile } = useProfile()
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
              <CloseIcon onClick={onClose}/>
             <FavoritesItemsContainer>
              {profile && (
               <>
                  {profile.data.favorites.map((fav: any) => (
                    <TeaFavoriteItem key={fav.id} product={fav} />
                  ))}
            </>
              )}
        
              </FavoritesItemsContainer>
              <Button label="Go to cart" color="white" position='absolute' />
          </FavouritesSidebarWrapper>
          </>
        )}
      </AnimatePresence>
    );  
  }
