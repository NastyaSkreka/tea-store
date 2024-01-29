'use client';

import { MainStyled } from '@/lib/template.styles'
import React, { PropsWithChildren } from 'react'

function MainLayout({ children }: PropsWithChildren) {
  return (
    <MainStyled>
        {children}
    </MainStyled>
  )
}

export default MainLayout;