'use client';

import { LayoutMainWrapper } from '@/lib/global.styles'
import React, { PropsWithChildren } from 'react'

function LayoutWrapper({ children }: PropsWithChildren) {
  return (
    <LayoutMainWrapper>
        {children}
    </LayoutMainWrapper>
  )
}

export default LayoutWrapper