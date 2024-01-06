import Header from '@/components/Header';
import { ReactNode } from 'react';
import NavFooter from '@/components/NavFooter';

interface IProps {
  children?: ReactNode
  path?: string
}
export default function CartLayout({ children, path }: IProps) {
  return(
    <>
    <Header variant='with-arr-path' path={path}/>
      { children }
     <NavFooter/>
    </>
  )
}