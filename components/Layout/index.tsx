import { ReactNode } from "react";
import Link from 'next/link';
import MainLayout from "../ui/main-layout";
import Header from "../Header";

interface IProps {
  headerVariant?: 'full' | 'with-arr-path' | 'with-arr';
  children: ReactNode;
  path?: string;
  buttonLink?: string | any;
  footer?: ReactNode; 
  button?: ReactNode;
}

export default function Layout({ 
    children, 
    path, 
    headerVariant, 
    buttonLink, 
    footer,
    button }: IProps) {
  return (
    <MainLayout>
      <Header variant={headerVariant} path={path} />
      {children}
      {button && (
        <Link href={buttonLink}>
          {button}
        </Link>
      )}
      {footer} 
    </MainLayout>
  );
}
