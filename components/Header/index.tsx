import React from 'react';
import ArrLeft from '@/public/arr-left';
import Image from 'next/image';
import avatar from '@/public/image/avatar.png';
import cart from '@/public/image/сart.png'

interface IProps {
  variant?: 'full' | 'with-arr-path' | 'with-arr';
  path?: string;
}

const checkVariant = (
  variant?: 'full' | 'with-arr-path' | 'with-arr',
  path?: string,
) => {
  switch (variant) {
    case 'full':
      return (
        <div className="absolute z-10 flex w-full justify-between">
          <ArrLeft />
          {path === 'product' ? <Image src={cart} width={35} height={35} alt="cart" /> : <Image src={avatar} width={40} height={40} alt="avatar" />}
        </div>
      );
    case 'with-arr-path':
      return (
        <div className="flex justify-start">
          <ArrLeft />
          <p className="ml-2 font-bold">{path?.toUpperCase()}</p>
        </div>
      );
    case 'with-arr':
      return (
        <div className="flex justify-start">
          <ArrLeft />
        </div>
      );
    default:
      return null;
  }
};

export default function Header({ variant, path }: IProps) {
  return (
    <header className="relative mt-[23px]">
      {checkVariant(variant, path)}
    </header>
  );
}
