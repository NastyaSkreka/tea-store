"use client"
import MainLayout from '@/components/ui/main-layout';
import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;

}
export default function ExploreLayout({ children}: IProps) {
  return(
    <MainLayout color="#106269">
      { children }
    </MainLayout>
  )
}