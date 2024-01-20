"use client" // TODO: fix className error and delete later 

import Image from 'next/image';
import phone from '@/public/image/phone.png';
import { ReduxProvider } from '@/lib/provider';
import './globals.css';
import MainWrapper from '@/components/MainWrapper';
import { ReactNode } from 'react';
import LayoutWrapper from '@/components/ui/layout-wrapper';


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>
            <MainWrapper>
                <Image className='layout-bg' src={phone} alt="Phone" />
                <ReduxProvider>
                    <main className='main-layout'>
                    {children}
                    </main>
                </ReduxProvider>
            </MainWrapper>
        </LayoutWrapper>
      </body>
    </html>
  );
}
