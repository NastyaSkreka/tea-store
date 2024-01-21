'use client';

import { PhoneTemplate } from '@/lib/global.styles'
import React, { PropsWithChildren } from 'react'
import phone from '@/public/image/phone.png';

function PhoneWrapper({ children }: PropsWithChildren) {
  return (
    <PhoneTemplate src={phone} alt="Phone">
        {children}
    </PhoneTemplate>
  )
}

export default PhoneWrapper;