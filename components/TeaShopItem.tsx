import React from 'react';
import mockup from '@/public/image/mockup.png';
import Image from 'next/image';
import StarIcon from '@/public/start-icon';
import FavHeart from '@/public/favheart-icon';

export default function TeaShopItem({ name }: any) {
  return (
    <div className="relative mb-4 w-full px-4  md:w-1/2 ">
      <div className="absolute right-[15px] top-[-5px]  rounded-full border-2 border-white bg-teaGrayLight p-1">
        <FavHeart />
      </div>
      <Image
        className="mb-2 w-full overflow-hidden object-cover"
        src={mockup}
        width={153}
        height={164}
        alt="tea"
      />
      <div className="text-md font-semibold text-teaGreen">{name}</div>
      <div className="flex items-center space-x-1">
        <StarIcon />
        <span className="text-md font-semibold text-gray-800">4.5</span>
        <span className="text-sm text-teaGray">1,200 reviews</span>
      </div>
      <span className="text-sm font-semibold text-teaDeepBlue">3.8 miles</span>
    </div>
  );
}
