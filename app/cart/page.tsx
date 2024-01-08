'use client';

import React from 'react';
import CartLayout from './CartLayout';
import { usePathname, useSearchParams } from 'next/navigation';
import DeliviredDropdown from '@/components/DeliveredDropdown';

export default function Cart() {
  const pathname = usePathname().replace('/', ' ');

  return (
    <CartLayout path={pathname}>
      <DeliviredDropdown/>
    </CartLayout>
  );

}


