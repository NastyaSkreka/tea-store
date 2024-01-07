import Header from '@/components/Header';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';

interface IProps {
  children: ReactNode;
}
export default function HomeLayout({ children }: IProps) {
  return (
    <>
      <Header variant="full" />
      {children}
      <Footer variant='nav' />
    </>
  );
}
