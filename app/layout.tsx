import { ReduxProvider } from '@/lib/provider';
import MainWrapper from '@/components/MainWrapper';
import { ReactNode } from 'react';
import LayoutWrapper from '@/components/ui/layout-wrapper';
import PhoneWrapper from '@/components/ui/template-wrapper';
import { GlobalStyle} from '../lib/globals'


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
