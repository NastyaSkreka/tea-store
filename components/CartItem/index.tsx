import Image from 'next/image';
import React from 'react';
import cart from '@/public/image/cart-tea.png';
import StarIcon from '@/public/start-icon';
import Dropdown from '@/components/ui/Dropdown';

export default function CartItem() {
  return (
    <div className="my-5">
      <div className="flex gap-3">
        <div className="flex flex-col">
          <Image width={120} height={125} src={cart} alt="item" />
          <div className="mt-2 flex justify-center">
            <Dropdown
              label="Qty:2"
              size="w-[64px]"
              content={['Qty:2', 'Qty:2', 'Qty:2']}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-md mb-2 text-center">Spiced Milk Tea</div>
          <div className="mb-2 flex items-center">
            <div className="mr-1 text-sm  font-semibold "> 48</div>
            <StarIcon />
          </div>
          <div className="mb-3 flex flex-row gap-1">
            <div className="text-teaGrayLight line-through">Rs.40</div>
            <div className="font-bolt">Rs.30</div>
            <div className="font-bold text-teaBlue">10% off</div>
          </div>
          <div className="mb-2 text-center font-bold text-teaBlue">
            free delivery
          </div>
          <div className="mb-3 flex gap-1">
            <button className="rounded-md bg-teaGrayLight px-[2px] text-sm font-bold">
              save for later
            </button>
            <button className="rounded-md bg-teaGrayLight px-[2px] text-sm font-bold">
              remove
            </button>
          </div>
          <button className="mx-auto w-[133px] rounded-md bg-teaBlue px-[2px] text-sm font-bold text-white ">
            Buy this now
          </button>
        </div>
      </div>
    </div>
  );
}
