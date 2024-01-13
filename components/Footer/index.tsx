import React from 'react';
import Home from '@/public/home-icon';
import Heart from '@/public/heart-icon';
import Favorites from '@/public/fav-icon';
import User from '@/public/user-icon';
import './index.css';
import Button from '../ui/Button';

interface IProps {
  variant?: 'nav' | 'btn-full' | 'btn-border';
  path?: string;
}

const checkVariant = (
  variant?: 'nav' | 'btn-full' | 'btn-border',
  path?: string,
) => {
  switch (variant) {
    case 'nav':
      return (
        <div className="nav">
          <div className="flex items-center gap-[30px]">
            <div className=" rounded-2xl bg-teaGreen p-3 ">
              <Home />
            </div>
            <div className="mx-3">
              <Heart />
            </div>
            <div className="mx-3">
              <Favorites />
            </div>
            <div className="mx-3">
              <User />
            </div>
          </div>
        </div>
      );
    case 'btn-full':
      return <Button color="green" label="Add to cart" />;
    case 'btn-border':
      return <Button color="white" label="Log in" />;
    default:
      return null;
  }
};

export default function Footer({ variant, path }: IProps) {
  return <footer>{checkVariant(variant, path)}</footer>;
}
