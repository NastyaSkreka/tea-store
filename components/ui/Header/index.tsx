import React from 'react';
import ArrLeft from '@/public/arr-left';
import Image from 'next/image';
import avatar from '@/public/image/avatar.png';

import cart from '@/public/image/shop-cart.png'
import {
    HeaderContainer,
    ArrLeftContainer,
    PathText,
    FullVariantContainer
} from './styles'
import Link from 'next/link';

interface IProps  {
  variant?: 'full' | 'with-arr-path' | 'with-arr';
  path?: string
}

const checkVariant = (variant?: 'full' | 'with-arr-path' | 'with-arr', path?: string) => {
  switch (variant) {
    case 'full':
      return <FullVariantContainer>
        <Link href="/"  >
            <ArrLeft />
        </Link>
        {path === 'product' ? (
            <Link href="/cart"  >
                <Image src={cart} width={35} height={35} alt="cart" />
            </Link>
          ) : (
            <Link href="/user"  >
                <Image src={avatar} width={40} height={40} alt="avatar" />
            </Link>
        )}
      </FullVariantContainer>;
    case 'with-arr-path':
      return <Link href="/"  >
        <ArrLeftContainer >
                <ArrLeft />
                <PathText>{ path?.toUpperCase() }</PathText>
        </ArrLeftContainer>
        </Link>
    case 'with-arr':
      return <Link href="/"  >
        <ArrLeftContainer>  
                 <ArrLeft />  
        </ArrLeftContainer>;
      </Link>
    default:
      return null
  }
}

export default function Header({variant, path}: IProps) {

  return (
    <HeaderContainer>
      { checkVariant(variant, path) }
    </HeaderContainer>
  );
}
