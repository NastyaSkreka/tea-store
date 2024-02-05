'use client'

import TeaSearch from '@/components/HomePage/TeaSearch';
import TeaFeatured from '@/components/HomePage/TeaFeatured';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (searchTerm: string) => {
      setSearchTerm(searchTerm);
    };

  return (
    <Layout 
        headerVariant='full'
        footer={<Footer/>}
    >
      <TeaSearch onSearch={handleSearch}/>
      <TeaFeatured searchTerm={searchTerm}/>
    </Layout>
  );
}
