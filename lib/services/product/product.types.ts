export const PRODUCTS = 'products'

export type TypeProductData = {
    name: string
    price: number, 
    description?: string,
    image: string, 
    miles: string, 
    time: string, 
    categoryId: number,
}

export type TypeProductDataFilters = {
    sort?: EnumProductSort | string, 
    searchTerm?: string, 
    page: string | number, 
    perPage: string | number, 
    rating: string, 
    minPrice?: string, 
    maxPrice?: string
    categoryId?: string,
}

export enum EnumProductSort {
    HIGH_PRICE = 'high-price', 
    LOW_PRICE = 'low-price', 
    NEWEST = 'newest',
    OLDEST = 'oldest'
}

export type TypeParamsFilters = {
    searchTerm: TypeProductDataFilters
}