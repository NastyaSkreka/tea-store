import { FavouritesListContainer, FavouritesListSection } from '@/components/FavouritesPage/style';
import Footer from '@/components/ui/Footer';
import PageLayout from '@/components/ui/pageLayout';
import { useProfile } from '@/lib/hooks/useProfile';
import { usePathname } from 'next/navigation';
import TeaShopItem from '../HomePage/TeaShopItem';

export default function FavouritesPage() {
    const pathname = usePathname().replace('/', ' ');
  
    const { profile } = useProfile()
  
    return (
      <PageLayout
        headerVariant="with-arr-path"
        path={pathname}
        footer={<Footer />}
      >
      <FavouritesListSection>
        <FavouritesListContainer>
          {
            profile &&  profile.data.favorites.map((fav) => (
                <TeaShopItem key={fav.id} product={fav} />         
            ))
          }
        </FavouritesListContainer>
      </FavouritesListSection>
      </PageLayout>
    );
  }
