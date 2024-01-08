import React from 'react';
import Home from '@/public/home-icon';
import Heart from '@/public/heart-icon';
import Favorites from '@/public/fav-icon';
import User from '@/public/user-icon';
import './index.css';

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
      return <button className="button-full bg-teaGreen ">Add to chart</button>;
    case 'btn-border':
      return (
        <button className="button-border border-teaGreen  text-teaGreen">
          Log in
        </button>
      );
    default:
      return null;
  }
};

export default function Footer({ variant, path }: IProps) {
  return <footer>{checkVariant(variant, path)}</footer>;
}
