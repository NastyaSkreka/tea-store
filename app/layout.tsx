import { ReduxProvider } from '@/lib/providers/provider';
import MainWrapper from '@/components/Main/MainWrapper';
import { ReactNode } from 'react';
import LayoutWrapper from '@/components/ui/layoutWrapper';
import { GlobalStyle } from '../lib/globals';
import { Raleway } from 'next/font/google';
import PhoneWrapper from '@/components/ui/phoneWrapper';
import { QueryProvider } from '@/lib/providers/query-provider';
import { PersistProvider } from '@/lib/providers/persist-provider';

const raleway = Raleway({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <QueryProvider>
        <LayoutWrapper>
          <GlobalStyle />
          <MainWrapper>
            <PhoneWrapper />
            <PersistProvider>
            <ReduxProvider>
             
                {children}
            
                </ReduxProvider>
                </PersistProvider>
          </MainWrapper>
        </LayoutWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
