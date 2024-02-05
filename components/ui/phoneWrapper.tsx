'use client';

// import { PhoneTemplate } from '@/lib/global.styles'
import styled from 'styled-components';
import React, { PropsWithChildren } from 'react'
import Image from 'next/image';
import phone from '@/public/image/phone.png';

export const PhoneTemplate = styled(Image)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
`

function PhoneWrapper({ children }: PropsWithChildren) {
  return (
    <PhoneTemplate src={phone} alt="Phone">
        {children}
    </PhoneTemplate>
  )
}

export default PhoneWrapper;