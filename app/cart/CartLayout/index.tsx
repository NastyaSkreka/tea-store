import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  path?: string;
}
export default function CartLayout({ children, path }: IProps) {
  return (
    <>
      <Header variant="with-arr-path" path={path} />
      {children}
      <Footer variant="nav" />
    </>
  );
}
