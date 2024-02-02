'use client';

import PaymentLayout from "@/components/Layouts/PaymentLayout";
import PaymentNavigate from "@/components/PaymentPage/PaymentNavigate";
import PaymentOptions from "@/components/PaymentPage/PaymentsOptions";
import Button from "@/components/ui/Button";
import { usePathname  } from 'next/navigation';

export default function Payment() {
    const pathname = usePathname().replace('/', ' ')

    return (
        <PaymentLayout path={pathname}>
            <PaymentNavigate/>
           <PaymentOptions/>
           <Button color="green" label="Pay RS.30"/>
        </PaymentLayout>
      );
}