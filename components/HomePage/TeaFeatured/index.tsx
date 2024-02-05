'use client'
import React, { useEffect, useState } from 'react';
import { useGetTeasQuery } from '@/lib/services/teaService';
import TeaShopItem from '@/components/HomePage/TeaShopItem';
import {
    FeaturedTeaSection, 
    FeaturedTeaTitle,
    TeaShopListContainer, 
} from './styles'

interface TeaFeaturedProps {
    searchTerm: string;
  }

export default function TeaFeatured({searchTerm}:TeaFeaturedProps) {

    const [filteredData, setFilteredData] = useState<any[]>([]);
    const { data, error, isLoading } = useGetTeasQuery('');


  useEffect(() => {
    handleSearch(searchTerm);
    }, [searchTerm, data]);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm) {
      setFilteredData(data ?? []); 
      return;
    }
  
    const filtered = (data ?? []).filter((teaItem: any) => 
        teaItem.name && teaItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredData(filtered);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <FeaturedTeaSection>
      <FeaturedTeaTitle>Featured tea shops</FeaturedTeaTitle>
      <TeaShopListContainer>
        {filteredData &&
          filteredData.map((teaShop: any, index: number) => (
                <TeaShopItem key={index} {...teaShop} />
          ))}
      </TeaShopListContainer>
    </FeaturedTeaSection>
  );
}
