'use client';

import TeaSearch from '@/components/TeaSearch';
import TeaFeatured from '@/components/TeaFeatured';
import HomeLayout from '@/app/HomeLayout';

export default function Home() {
  return (
    <HomeLayout>
      <TeaSearch />
      <TeaFeatured />
    </HomeLayout>
  );
}
