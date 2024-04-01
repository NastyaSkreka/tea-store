import React from 'react';
import { usePathname  } from 'next/navigation';
import CartItem from '@/components/CartPage/CartItem';
import PageLayout from '@/components/ui/pageLayout';
import Footer from '@/components/ui/Footer';
import Dropdown from '@/components/ui/Dropdown';
import { useCart } from '@/lib/hooks/useCart';
import { StyledButton, TotalPriceValue, CartContainer } from './styles'

export default function CartPage() {
    const pathname = usePathname().replace('/', ' ');

    const { items, total} = useCart()
     
    return (
      <PageLayout 
          headerVariant='with-arr-path'
          path={pathname}
          footer={<Footer/>}
      >
     <CartContainer>   
    <StyledButton>Proceed to pay</StyledButton>
      <Dropdown
          label=" Delivered to Deepak-Tamilnadu 625513"
          content={[
          'Delivered to London 625513',
          'Delivered to Ukraine 625513',
          ]}
       />
       {
          items && items.map(( item ) => <CartItem item ={item} key={item.id}/>)
       }
        <TotalPriceValue>Total: {total}$</TotalPriceValue>
        </CartContainer>
      </PageLayout>
  
    )
  }