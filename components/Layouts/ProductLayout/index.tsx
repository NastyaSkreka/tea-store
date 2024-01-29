"use client"
import Header from '@/components/Header';
import Button from '@/components/ui/Button';
import MainLayout from '@/components/ui/main-layout';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode
}
export default function ProductLayout({ children }: IProps){
  return(
    <MainLayout>
     <Header variant='full' path="product"/> 
      { children }
      <Button color="green" label='Add to chart'/>
    </MainLayout>
  )
}