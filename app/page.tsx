'use client'

import TeaSearch from '@/components/HomePage/TeaSearch';
import TeaFeatured from '@/components/HomePage/TeaFeatured';
import HomeLayout from '@/components/Layouts/HomeLayout';
import { useState } from 'react';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (searchTerm: string) => {
      setSearchTerm(searchTerm);
    };

  return (
    <HomeLayout>
      <TeaSearch onSearch={handleSearch}/>
      <TeaFeatured searchTerm={searchTerm}/>
    </HomeLayout>
  );
}
