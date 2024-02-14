import { ReduxProvider } from '@/lib/provider';
import MainWrapper from '@/components/Main/MainWrapper';
import { ReactNode } from 'react';
import LayoutWrapper from '@/components/ui/layoutWrapper';
import { GlobalStyle} from '../lib/globals'
import { Raleway } from 'next/font/google'
import PhoneWrapper from '@/components/ui/phoneWrapper';


const raleway = Raleway({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <LayoutWrapper>
            <GlobalStyle/>
            <MainWrapper>
                <PhoneWrapper/>
                <ReduxProvider>
                    {children}
                </ReduxProvider>
            </MainWrapper>
        </LayoutWrapper>
      </body>
    </html>
  );
}
