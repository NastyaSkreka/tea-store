import React from 'react';
import Home from '@/public/home-icon';
import Heart from '@/public/heart-icon';
import Favorites from '@/public/fav-icon';
import User from '@/public/user-icon';

export default function NavFooter() {
  return (
    <div className="absolute bottom-[21px] left-[25px] right-0 flex h-[90px] w-[300px] items-center justify-center rounded-bl-3xl rounded-br-3xl bg-white p-4 px-4">
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
}
