'use client';

import TotalLayout from "@/components/Layouts/TotalLayout";
import PaymentNavigate from "@/components/PaymentPage/PaymentNavigate";
import TotalCost from "@/components/TotalPage/TotalCost";


export default function Product() {
    return (
        <TotalLayout>
           <PaymentNavigate/>
           <TotalCost/>
      
        </TotalLayout>
      );
}

