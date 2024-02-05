'use client';

import { MainStyled } from '@/lib/template.styles'
import React  from 'react'

interface IProps{
   children: React.ReactNode;
   color?: string;
}

function MainLayout({ children, color = '#fff' }: IProps) {
  return (
    <MainStyled color={color}>
        {children}
    </MainStyled>
  )
}

export default MainLayout;