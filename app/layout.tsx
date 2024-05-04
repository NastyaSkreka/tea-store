import { ReduxProvider } from '@/lib/providers/provider';
import { ReactNode } from 'react';
import { GlobalStyle } from '../lib/globals';
import { Raleway } from 'next/font/google';
import { QueryProvider } from '@/lib/providers/query-provider';
import { PersistProvider } from '@/lib/providers/persist-provider';

const raleway = Raleway({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <QueryProvider>
          <ReduxProvider>  
              <GlobalStyle/>
              <PersistProvider>{children}</PersistProvider> 
          </ReduxProvider>
        </QueryProvider>
        <div id='modal'></div>
      </body>
    </html>
  );
}
