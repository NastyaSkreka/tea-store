"use client"

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainLayout from '@/components/ui/main-layout';
import { ReactNode } from 'react';


interface IProps {
  children: ReactNode
}
export default function HomeLayout({ children }: IProps){
  return(
    <MainLayout>
      <Header variant='full'/>
      { children }
    </MainLayout>
  )
}