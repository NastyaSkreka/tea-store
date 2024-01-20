import React from 'react';
import Dropdown from '@/components/ui/Dropdown';


export default function DeliviredDropdown() {
  return (
    <Dropdown
        label=" Delivered to Deepak-Tamilnadu 625513"
        size="w-full"
        content={[
        'Delivered to London 625513',
        'Delivered to Ukraine 625513',
        ]}
  />
)
}
