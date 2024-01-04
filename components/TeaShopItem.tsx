import React from 'react'
import mockup from '@/public/mockup.png'
import Image from 'next/image';
import StarIcon from '@/public/start-icon';

export default function TeaShopItem({name}) {
   
  return (
    <div className="w-full md:w-1/2 px-4 mb-4 ">  
        <Image
         className='w-full object-cover mb-2' 
         src={mockup} 
         width={153}
         height={164}
         alt="tea" />
        <div className='text-[#106269] text-md font-semibold' >{name}</div>

        <div className="flex items-center space-x-1">
        <StarIcon/>
        <span className="text-md font-semibold text-gray-800">4.5</span>
        <span className="text-sm text-[#B7C1C2]">1,200 reviews</span>
    </div>
    <span className="text-sm text-[#003B40] font-semibold">3.8 miles</span>
    </div>
  )
}
