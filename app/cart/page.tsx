'use client'

import React from 'react';
import { usePathname  } from 'next/navigation';
import DeliviredDropdown from '@/components/CartPage/DeliviredDropdown'
import CartItem from '@/components/CartPage/CartItem/CartItem';
import PageLayout from '@/components/ui/pageLayout';
import Footer from '@/components/ui/Footer';


export default function Cart() {
  const pathname = usePathname().replace('/', ' ')

  return (
    <PageLayout 
        headerVariant='with-arr-path'
        path={pathname}
        footer={<Footer/>}
    >
        <DeliviredDropdown/>
        <CartItem/>
    </PageLayout>
  )
}
