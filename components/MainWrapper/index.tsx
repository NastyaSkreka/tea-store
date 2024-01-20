'use client';

import { ReactNode } from 'react';
import { MainWrapper as MainWrapperContainer } from '@/lib/global.styles';

interface IProps {
  children?: ReactNode
}
export default function MainWrapper({ children }: IProps) {
  return (
    <MainWrapperContainer>
        {children}
    </MainWrapperContainer>
  )
}