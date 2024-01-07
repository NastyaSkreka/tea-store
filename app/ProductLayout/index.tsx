import Header from '@/components/Header';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}
export default function ProductLayout({ children }: IProps) {
  return (
    <>
      <Header variant="full" />
      {children}
    </>
  );
}
