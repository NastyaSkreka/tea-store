import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}
export default function ProductLayout({ children }: IProps) {
  return (
    <div className='main--wrapper--main'>
      <Header variant="full" path="product" />
      {children}
      <Footer variant="btn-full" />
    </div>
  );
}
