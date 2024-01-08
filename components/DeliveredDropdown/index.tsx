"use client"
import Dropdown from '@/public/dropdown-icon';
import React, { useState }  from 'react'

export default function DeliviredDropdown() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
      console.log(' toggleDropdown ')
    };

  return (
    <div className="relative z-[101] mt-3">
    <div
      className=" flex gap-1 items-center border-2 border-teaBlue px-1 py-2 rounded w-full"
      onClick={toggleDropdown}
    >
        <div className='text-sm font-semibold '>
        Delivered to Deepak-Tamilnadu 625513 
        </div>
        <Dropdown/>
    
    </div>
    <div className={`absolute ${isOpen ? 'block' : 'hidden'} mt-2 bg-white border rounded  w-full`}>
      <ul>
        <li className="py-2 px-4 text-sm"> Delivered to Deepak-Tamilnadu 625513 </li>
        <li className="py-2 px-4 text-sm"> Delivered to Deepak-Tamilnadu 625513 </li>
        <li className="py-2 px-4 text-sm"> Delivered to Deepak-Tamilnadu 625513 </li>
      </ul>
    </div>
  </div>
  
  
  )
}


