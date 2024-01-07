import Header from '@/components/Header';
import { ReactNode } from 'react';
import NavFooter from '@/components/NavFooter';

interface IProps {
  children: ReactNode;
}
export default function HomeLayout({ children }: IProps) {
  return (
    <>
      <Header variant="full" />
      {children}
      <NavFooter />
    </>
  );
}
