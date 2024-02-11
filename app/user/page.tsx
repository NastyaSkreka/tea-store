'use client';

import UserInfo from '@/components/UserPage/UserInfo';
import PageLayout from '@/components/ui/pageLayout';
import { usePathname  } from 'next/navigation';

export default function User() {
    
    const pathname = usePathname().replace('/', ' ')

    return (
        <PageLayout 
            headerVariant='with-arr-path'
            path={pathname}    
        >
         <UserInfo/>
        </PageLayout>
    )}
