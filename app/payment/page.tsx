'use client';

import PaymentNavigate from "@/components/PaymentPage/PaymentNavigate";
import PaymentOptions from "@/components/PaymentPage/PaymentsOptions";
import Button from "@/components/ui/Button";
import PageLayout from "@/components/ui/pageLayout";
import { usePathname  } from 'next/navigation';

export default function Payment() {
    const pathname = usePathname().replace('/', ' ')

    return (
        <PageLayout 
            headerVariant='with-arr-path'
            path={pathname}
            buttonLink="/cart"
            button={<Button color="green" label="Pay RS.30" position="absolute"/>}
        >
            <PaymentNavigate/>
           <PaymentOptions/>
        </PageLayout>
      );
}