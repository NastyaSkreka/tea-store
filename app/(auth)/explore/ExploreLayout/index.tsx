import Footer from '@/components/Footer';
import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  path?: string;
}
export default function ExploreLayout({ children }: IProps) {
  return (
    <div className='main--wrapper--secondary'>
      {children}
      <Footer variant="btn-border" label="Explore"  />
    </div>
  );
}

