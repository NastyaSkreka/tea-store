'use client';

import TotalLayout from "@/components/Layouts/TotalLayout";
import PaymentNavigate from "@/components/PaymentPage/PaymentNavigate";
import GuaranteedCost from "@/components/TotalPage/GuaranteedCost";
import PromoCode from "@/components/TotalPage/PromoCode";
import TotalCost from "@/components/TotalPage/TotalCost";
import { usePathname  } from 'next/navigation';


export default function Product() {
    const pathname = usePathname().replace('/', ' ')

    return (
        <TotalLayout path={pathname}>
           <PaymentNavigate/>
           <TotalCost/>
           <PromoCode/>
           <GuaranteedCost/>
        </TotalLayout>
      );
}

