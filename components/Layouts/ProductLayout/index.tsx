"use client"
import Header from '@/components/Header';
import Button from '@/components/ui/Button';
import MainLayout from '@/components/ui/main-layout';
import Link from 'next/link';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode
}
export default function ProductLayout({ children }: IProps){
  return(
    <MainLayout>
     <Header variant='full' path="product"/> 
      { children }
      <Link href="/cart">
        <Button color="green" label='Add to chart' position="absolute"/>
      </Link>
    </MainLayout>
  )
}