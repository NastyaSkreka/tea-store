"use client"

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReactNode } from 'react';


interface IProps {
  children: ReactNode
}
export default function HomeLayout({ children }: IProps){
  return(
    <>
      <Header variant='full'/>
      { children }
      <Footer variant='nav'/>
    </>
  )
}