"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useActions } from './useActions';
import { useTypedSelector } from './useTypedSelector';
import { useEffect } from 'react';
import { TypeProductDataFilters } from '../services/product/product.types';

export const useFilters = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { updateQueryParam } = useActions();
    const { replace } = useRouter();

    const { queryParams, isFilterUpdated } = useTypedSelector(
        (state) => state.filters,
    );

    useEffect(() => {
        if (!searchParams.has('page')) {
            updateQueryParams('page', '1');
        }
    }, []);

    useEffect(() => {
        // для синхронизации данных посковой строки и стора
        searchParams.forEach((value, key) => {
            updateQueryParam({
                key: key as keyof TypeProductDataFilters,
                value,
            });
        });
    }, []);

    // обновление адресной строки 
    const updateQueryParams = (
        key: keyof TypeProductDataFilters,
        value: string,
    ) => {
        const newParams = new URLSearchParams(searchParams.toString());

        if (value) {
            newParams.set(key, String(value));
        } else {
            newParams.delete(key);
        }

        replace(pathname + `?${newParams.toString().replace(/%7C/g, '|')}`);
        updateQueryParam({ key, value });
    };

    return {
        updateQueryParams,
        queryParams,
        isFilterUpdated,
    };
};
