'use client';

import TeaSearch from '@/components/HomePage/TeaSearch';
import TeaFeatured from '@/components/HomePage/TeaFeatured';
import HomeLayout from '@/components/Layouts/HomeLayout';

export default function Home() {
  return (
    <HomeLayout>
      <TeaSearch />
      <TeaFeatured />
    </HomeLayout>
  );
}
