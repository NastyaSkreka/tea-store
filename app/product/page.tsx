'use client';

import ProductLayout from '@/components/Layouts/ProductLayout';
import AboutProduct from '@/components/ProductPage/AboutProduct';
import SimilarProducts from '@/components/ProductPage/SimilarProducts';

export default function Product() {
    return (
        <ProductLayout>
          <AboutProduct/>
          <SimilarProducts/>
        </ProductLayout>
      );
}

