'use client'

import React from 'react';
import CartLayout from './CartLayout';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Cart() {
  const pathname = usePathname().replace('/', ' ')

  return <CartLayout path={pathname}>
    <h1>Cart page</h1>
  </CartLayout>;
}
