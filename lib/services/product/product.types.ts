export const PRODUCTS = 'products'

export type TypeProductData = {
    name: string
    price: number, 
    description?: string,
    image: string, 
    miles: string, 
    time: string, 
}

export type TypeProductDataFilters = {
    sort?: EnumProductSort, 
    searchTerm?: string, 
    page?: string | number, 
    perPage?: string | number
}

export enum EnumProductSort {
    HIGH_PRICE = 'high-price', 
    LOW_PRICE = 'low-price', 
    NEWEST = 'newest',
    OLDEST = 'oldest'
}

