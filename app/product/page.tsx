import React from 'react';
import HomeLayout from '../HomeLayout';
import AboutProduct from '@/components/AboutProduct';
import SimilarProducts from '@/components/SimilarProducts';
import ProductLayout from '../ProductLayout';

export default function Product() {
  return (
    <ProductLayout>
      <AboutProduct />
      <SimilarProducts />
    </ProductLayout>
  );
}
