'use client';


import Layout from "@/components/Layout";
import PaymentNavigate from "@/components/PaymentPage/PaymentNavigate";
import PaymentOptions from "@/components/PaymentPage/PaymentsOptions";
import Button from "@/components/ui/Button";
import { usePathname  } from 'next/navigation';

export default function Payment() {
    const pathname = usePathname().replace('/', ' ')

    return (
        <Layout path={pathname} 
                headerVariant='with-arr-path' 
                button={<Button color="green" label="Pay RS.30" position="absolute"/>}
        >
            <PaymentNavigate/>
           <PaymentOptions/>
        </Layout>
      );
}