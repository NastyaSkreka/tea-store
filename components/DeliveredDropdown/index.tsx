'use client';
import Dropdown from '@/public/dropdown-icon';
import React, { useState } from 'react';

export default function DeliviredDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(' toggleDropdown ');
  };

  return (
    <div className="relative z-[101] mt-3">
      <div
        className=" flex w-full items-center gap-1 rounded border-2 border-teaBlue px-1 py-2"
        onClick={toggleDropdown}
      >
        <div className="text-sm font-semibold ">
          Delivered to Deepak-Tamilnadu 625513
        </div>
        <Dropdown />
      </div>
      <div
        className={`absolute ${
          isOpen ? 'block' : 'hidden'
        } mt-2 w-full rounded border  bg-white`}
      >
        <ul>
          <li className="px-4 py-2 text-sm">
            {' '}
            Delivered to Deepak-Tamilnadu 625513{' '}
          </li>
          <li className="px-4 py-2 text-sm">
            {' '}
            Delivered to Deepak-Tamilnadu 625513{' '}
          </li>
          <li className="px-4 py-2 text-sm">
            {' '}
            Delivered to Deepak-Tamilnadu 625513{' '}
          </li>
        </ul>
      </div>
    </div>
  );
}
