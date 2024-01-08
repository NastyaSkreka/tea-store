import Image from 'next/image';
import React, { useState } from 'react';
import cart from '@/public/image/cart-tea.png';
import Dropdown from '@/public/dropdown-icon';
import StarIcon from '@/public/start-icon';

export default function CartItem() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(' toggleDropdown ');
  };

  return (
    <div className="mt-5">
      <div className="flex gap-1">
        <div className="flex flex-col">
          <Image width={131} height={136} src={cart} alt="item" />
          <div className="relative z-[101] mt-3">
            <div
              className=" flex w-[64px] items-center gap-1 rounded border-2 border-teaBlue px-1 py-2"
              onClick={toggleDropdown}
            >
              <div className="text-sm font-semibold ">Qty:2</div>
              <Dropdown />
            </div>
            <div
              className={`absolute ${
                isOpen ? 'block' : 'hidden'
              } mt-2 w-[64px] rounded border bg-white`}
            >
              <ul>
                <li className="px-4 py-2 text-sm"> Qty:2 </li>
                <li className="px-4 py-2 text-sm"> Qty:2</li>
                <li className="px-4 py-2 text-sm"> Qty:2 </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="text-md text-center">Spiced Milk Tea</div>
          <div className="flex items-center">
            <div className="mr-1 text-sm  font-semibold"> 48</div>
            <StarIcon />
          </div>
          <div className="flex flex-row gap-1">
            <div className="text-teaGrayLight line-through">Rs.40</div>
            <div className="font-bolt">Rs.30</div>
            <div className="font-bold text-teaBlue">10% off</div>
          </div>
          <div className="text-center font-bold text-teaBlue ">
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
