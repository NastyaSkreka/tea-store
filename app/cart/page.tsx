'use client';

import React from 'react';
import CartLayout from './CartLayout';
import { usePathname, useSearchParams } from 'next/navigation';
import DeliviredDropdown from '@/components/DeliveredDropdown';
import CartItem from '@/components/CartItem';

export default function Cart() {
  const pathname = usePathname().replace('/', ' ');

  return (
    <CartLayout path={pathname}>
      <DeliviredDropdown />
      <CartItem />
    </CartLayout>
  );
}
