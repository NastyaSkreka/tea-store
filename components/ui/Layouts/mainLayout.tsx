'use client';

import { MainStyled } from '@/lib/globals'
import React  from 'react'

interface IProps{
   children: React.ReactNode;
   color?: string;
}

function MainLayout({ children, color = 'var(--textSecondary-color)' }: IProps) {
  return (
    <MainStyled color={color}>
        {children}
    </MainStyled>
  )
}

export default MainLayout;