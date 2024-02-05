'use client';


import Layout from '@/components/Layout';
import AboutProduct from '@/components/ProductPage/AboutProduct';
import SimilarProducts from '@/components/ProductPage/SimilarProducts';
import Button from '@/components/ui/Button';

export default function Product() {
    return (
        <Layout 
            headerVariant='full' 
            path="product"
            buttonLink="/cart"
            button={<Button color="green" 
                            label="Add to chart" 
                            position="absolute"/>}
        >
          <AboutProduct/>
          <SimilarProducts/>
        </Layout>
      );
}

