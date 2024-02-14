import { ReactNode } from 'react';
import './index.css';

interface IProps {
  children?: ReactNode;
}
export default function MainWrapper({ children }: IProps) {
   
  return (
    <div className='main-wrapper relative bg-cover bg-center bg-no-repeat'>
      {children}
    </div>
  );
}
