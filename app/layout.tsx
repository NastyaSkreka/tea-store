import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import phone from '@/public/image/phone.png';
import { ReduxProvider } from '@/lib/provider';
import './globals.css';
import MainWrapper from '@/components/MainWrapper';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className='container'>
          <MainWrapper>
            <Image src={phone} alt="Phone" />
            <ReduxProvider>
              <main>{children}</main>
            </ReduxProvider>
          </MainWrapper>
        </div>
      </body>
    </html>
  );
}


