'use client'

import TeaSearch from '@/components/HomePage/TeaSearch';
import TeaFeatured from '@/components/HomePage/TeaFeatured';
import { useState } from 'react';
import Footer from '@/components/ui/Footer';
import PageLayout from "@/components/ui/pageLayout";


export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (searchTerm: string) => {
      setSearchTerm(searchTerm);
    };

  return (
    <PageLayout 
        headerVariant='full'
        footer={<Footer/>}
    >
      <TeaSearch onSearch={handleSearch}/>
      <TeaFeatured searchTerm={searchTerm}/>
    </PageLayout>
  );
}
