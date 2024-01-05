'use client';

import Header from '@/components/Header';
import ArrLeft from '@/public/arr-left';
import Image from 'next/image';
import avatar from '@/public/image/avatar.png';
import TeaSearch from '@/components/TeaSearch';
import TeaFeatured from '@/components/TeaFeatured';
import NavFooter from '@/components/NavFooter';

export default function Home() {
  return (
    <main>
      <Header>
        <div className="flex justify-between">
          <ArrLeft />
          <Image src={avatar} width={40} height={40} alt="avatar" />
        </div>
      </Header>
      <TeaSearch />
      <TeaFeatured />
      <NavFooter />
    </main>
  );
}
