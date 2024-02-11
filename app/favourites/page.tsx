'use client';

import FavouritesList from "@/components/FavouritesPage/FavouritesList";
import Footer from "@/components/ui/Footer";
import PageLayout from "@/components/ui/pageLayout";
import { usePathname  } from 'next/navigation';

export default function Favourites() {
    const pathname = usePathname().replace('/', ' ')

    return (
        <PageLayout 
            headerVariant='with-arr-path'
            path={pathname}
            footer={<Footer/>}
        >
           <FavouritesList/>
        </PageLayout>
      );
}