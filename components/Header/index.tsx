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

interface IProps  {
  variant?: 'full' | 'with-arr-path' | 'with-arr';
  path?: string
}

const checkVariant = (variant?: 'full' | 'with-arr-path' | 'with-arr', path?: string) => {
  switch (variant) {
    case 'full':
      return <FullVariantContainer>
        <ArrLeft />
        {path === 'product' ? (
            <Image src={cart} width={35} height={35} alt="cart" />
          ) : (
            <Image src={avatar} width={40} height={40} alt="avatar" />
        )}
      </FullVariantContainer>;
    case 'with-arr-path':
      return <ArrLeftContainer >
        <ArrLeft />
        <PathText>{ path?.toUpperCase() }</PathText>
      </ArrLeftContainer>;
    case 'with-arr':
      return <ArrLeftContainer>
        <ArrLeft />
      </ArrLeftContainer>;
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
