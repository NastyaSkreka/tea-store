"use client"

import Header from '@/components/Header';
import MainLayout from '@/components/ui/main-layout';
import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode
  path?: string
}
export default function TotalLayout({ children, path }: IProps) {
  return(
    <MainLayout>
    <Header variant='with-arr-path' path={path}/>
      { children }
    </MainLayout>
  )
}