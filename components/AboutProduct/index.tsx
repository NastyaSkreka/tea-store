import Image from 'next/image';
import React from 'react';
import product from '@/public/image/product.png';
import Minus from '@/public/minus-icon';
import Plus from '@/public/plus-icon';
import StarIcon from '@/public/start-icon';
import Clock from '@/public/clock-icon';
import './index.css';

export default function AboutProduct() {
  return (
    <section>
      <Image src={product} className="background-image" alt="product" />
      <div className="mt-64 pt-2">
        <div className="mb-3 flex justify-between">
          <div className="space-y-1">
            <div className="text-sm">Spiced Lemon Tea</div>
            <div className="flex items-center">
              <div className="mr-1 text-sm  font-semibold"> 48</div>
              <StarIcon />
            </div>
            <div className="flex items-center gap-2">
              <Clock />
              <div className="text-sm font-semibold"> 24 min</div>
            </div>
          </div>
          <div className="flex gap-2">
            <Minus />
            <div className="text-xl font-bold">2</div>
            <Plus />
          </div>
        </div>
        <div>
          <div className="mb-1 font-semibold text-teaBlue">Description</div>
          <div className="w-full text-sm">
            A conversation is never complete until you have a cup of chai
            Friends visiting each others
          </div>
        </div>
      </div>
    </section>
  );
}
