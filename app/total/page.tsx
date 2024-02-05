'use client';

import PaymentNavigate from "@/components/PaymentPage/PaymentNavigate";
import GuaranteedCost from "@/components/TotalPage/GuaranteedCost";
import PromoCode from "@/components/TotalPage/PromoCode";
import TotalCost from "@/components/TotalPage/TotalCost";
import PageLayout from "@/components/ui/pageLayout";
import { usePathname  } from 'next/navigation';

export default function Product() {
    const pathname = usePathname().replace('/', ' ')

    return (
        <PageLayout 
            headerVariant='with-arr-path' 
            path={pathname}
        >
           <PaymentNavigate/>
           <TotalCost/>
           <PromoCode/>
           <GuaranteedCost/>
        </PageLayout>
      );
}

