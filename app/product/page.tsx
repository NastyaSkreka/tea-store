'use client';

import AboutProduct from '@/components/ProductPage/AboutProduct';
import SimilarProducts from '@/components/ProductPage/SimilarProducts';
import Button from '@/components/ui/Button';
import PageLayout from '@/components/ui/pageLayout';

export default function Product() {
    return (
        <PageLayout 
            headerVariant='full' 
            path="product"
            buttonLink="/cart"
            button={<Button color="green" label='Add to chart' position="absolute"/>}
        >
          <AboutProduct/>
          <SimilarProducts/>
        </PageLayout>
    )}
