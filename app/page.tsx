'use client'

import Header from '@/components/header'
import ArrLeft from '@/public/arr-left'
import Image from 'next/image'
import avatar from '@/public/avatar.png'
import SearchIcon from '@/public/search-icon'
import FilterICon from '@/public/filter-icon'
import { useGetTeasQuery } from '@/lib/services/teaService'
import TeaShopItem from '@/components/TeaShopItem'

export default function Page() {
    const { data, error, isLoading } = useGetTeasQuery("");

     if (isLoading) {
        return <div>Loading...</div>;
     }
    console.log(data)
    
  return (
    <main>
     <Header>
        <div className='flex justify-between'>
        <ArrLeft/>
        <Image 
            src={avatar}
            width={40}
            height={40}
            alt="avatar"
        />
        </div>
     </Header>
        <div className='mt-5 text-xl text-[#00575F]'>
            Find a tea shop anywhere
        </div>
        <div className='mt-5 flex gap-2'>
        <div className="relative">
        <input
            type="text"
            className="bg-[#EDF0EF] p-2 pl-10 rounded-2xl outline-none"
            placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
            <SearchIcon/>
        </div>
        </div>
        <div className="flex items-center">
        <div className="w-10 h-10 bg-[#00575F] rounded-lg flex items-center justify-center">
            <FilterICon/>
        </div>
    </div>
     </div>
     <div className='mt-5 text-md text-[#00575F]'>
        Featured tea shops
     </div>
     <div className='mt-5 flex flex-wrap -mx-4'>
     {data.map((teaShop )=> (
            <TeaShopItem key={teaShop.id} {...teaShop} />
          ))}
   </div>
    </main>
  )
}
