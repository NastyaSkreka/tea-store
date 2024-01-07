import React from 'react';
import similar from '@/public/image/similarpr.png';
import Image from 'next/image';
import StarIcon from '@/public/start-icon';

export default function SimilarProducts() {
  return (
    <div className="mt-3">
      <div className="mb-1 font-semibold text-teaBlue">Similar products</div>
      <div className="flex   items-center">
        <Image src={similar} alt="product" width={50} height={50} />
        <div className="ml-4 flex flex-col">
          <div className="mb-1 text-sm">pure Milk Tea</div>
          <div className="flex items-center">
            <div className="mr-1 text-sm  font-semibold"> 48</div>
            <StarIcon />
          </div>
        </div>

        <div className="ml-auto h-[25px] w-[25px] rounded-full bg-teaGrayLight"></div>
      </div>
    </div>
  );
}
