import { useEffect, useState } from "react";
import { ProductService } from "../services/product/product.service";
import { TypeProductDataFilters } from "../services/product/product.types";
import { TypePaginationProducts } from "../types/product.interface";

async function getProduct(searchParams: TypeProductDataFilters) {
    const data = await ProductService.getAll(searchParams);
    return data;
}

export function useProduct(searchParams: TypeProductDataFilters){
    const [data, setData] = useState<TypePaginationProducts | null>(null);
    const [isLoading,setIsLoading] = useState(true);
    const [isError, setIsError] = useState<string | null>(null);

    useEffect(() => {
        ProductService.getAll(searchParams).then(setData)
        .catch((err) => setIsError(err))
        .finally(() => setIsLoading(false))
    }, [searchParams]);

    return {
        isLoading,
        data,
        isError,
    }
}