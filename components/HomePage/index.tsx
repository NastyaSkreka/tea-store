'use client';
import Footer from '@/components/ui/Footer';
import PageLayout from '@/components/ui/pageLayout';
import { TeaShopSection, Title, SearchInput } from '@/components/HomePage/styles';
import {
    FeaturedTeaSection, 
    FeaturedTeaTitle,
    TeaShopListContainer, 
} from './styles'
import TeaShopItem from './TeaShopItem';
import { ProductService } from '@/lib/services/product/product.service';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');
 
    const { data } = useQuery({
        queryKey: ['get product'], 
        queryFn: () => ProductService.getAll({
            page: 1,
            perPage: 4,
          })
      }) 
  console.log("data =>",  data)
      const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredProducts = data ? data.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) : [];

  return (
    <PageLayout headerVariant="full" footer={<Footer />}>
      <TeaShopSection>
        <Title>Find a tea shop anywhere</Title>
        <SearchInput type="text" 
          placeholder="Search" 
          value={searchTerm}
          onChange={handleSearch} />
      </TeaShopSection>
      <FeaturedTeaSection>
      <FeaturedTeaTitle>Featured tea shops</FeaturedTeaTitle>
      <TeaShopListContainer>
        {filteredProducts.map((product) => (
            <TeaShopItem key={product.id} product={product} />
          ))}
      </TeaShopListContainer>
    </FeaturedTeaSection>
    </PageLayout>
  );
}
