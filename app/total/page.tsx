'use client';

import Layout from "@/components/Layout";
import PaymentNavigate from "@/components/PaymentPage/PaymentNavigate";
import GuaranteedCost from "@/components/TotalPage/GuaranteedCost";
import PromoCode from "@/components/TotalPage/PromoCode";
import TotalCost from "@/components/TotalPage/TotalCost";
import { usePathname  } from 'next/navigation';


export default function Product() {
    const pathname = usePathname().replace('/', ' ')

    return (
        <Layout path={pathname} headerVariant='with-arr-path'>
           <PaymentNavigate/>
           <TotalCost/>
           <PromoCode/>
           <GuaranteedCost/>
        </Layout>
      );
}

