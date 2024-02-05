'use client'

import React from 'react';
import { usePathname  } from 'next/navigation';
import DeliviredDropdown from '@/components/CartPage/DeliviredDropdown'
import CartItem from '@/components/CartPage/CartItem/CartItem';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';


export default function Cart() {
  const pathname = usePathname().replace('/', ' ')

  return (
    <Layout
        headerVariant='with-arr-path'
        path={pathname}
        footer={<Footer/>}
    >
        <DeliviredDropdown/>
        <CartItem/>
    </Layout>
  )
}
