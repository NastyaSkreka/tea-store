import { ReduxProvider } from '@/lib/provider';
import './globals.css';
import MainWrapper from '@/components/MainWrapper';
import { ReactNode } from 'react';
import LayoutWrapper from '@/components/ui/layout-wrapper';
import PhoneWrapper from '@/components/ui/template-wrapper';
import MainLayout from '@/components/ui/main-layout';

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
                <PhoneWrapper/>
                <ReduxProvider>
                    <MainLayout>
                    {children}
                    </MainLayout>
                </ReduxProvider>
            </MainWrapper>
        </LayoutWrapper>
      </body>
    </html>
  );
}
