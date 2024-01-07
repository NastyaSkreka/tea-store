import Image from 'next/image'
import React from 'react'
import product from '@/public/image/product.png'
import './index.css'

export default function AboutProduct() {
  return (
    <Image
       src={product}
       className="background-image"
       alt='product'
     /> 
  )
}
