'use client'

import React from 'react';
import { usePathname  } from 'next/navigation';
import CartLayout from '@/components/Layouts/CartLayout';
import DeliviredDropdown from '@/components/CartPage/DeliviredDropdown'

export default function Cart() {
  const pathname = usePathname().replace('/', ' ')

  return (
    <CartLayout path={pathname}>
     <DeliviredDropdown/>
    </CartLayout>
  )
}
