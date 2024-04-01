import { instance } from "@/lib/api/api.interceptor";
import { PRODUCTS, TypeProductData, TypeProductDataFilters } from "./product.types";
import { IProduct, TypePaginationProducts } from "@/lib/types/product.interface";

export const ProductService = {

    async getAll(queryData = {} as TypeProductDataFilters) {
        const { data } = await instance<TypePaginationProducts>({
            url: PRODUCTS, 
            method: 'GET', 
            params: queryData
        })

        return data
    }, 

    async getById(id: string | number) {
        const { data } = await  instance<IProduct[]>({
            url: `${PRODUCTS}/${id}`, 
            method: 'GET'
        })

       return data
    },

    async getSimilar(id: string | number) {
        return instance<IProduct>({
            url: `${PRODUCTS}/similar/${id}`, 
            method: 'GET'
        })
    }, 

    async create() {
        return instance<IProduct>({
            url: PRODUCTS,
            method: 'POST'
        })
    }, 

    async update(id: string | number, data: TypeProductData) {
        return instance<IProduct>({
            url: `${PRODUCTS}/${id}`, 
            method: 'PUT', 
            data
        })
    }, 

    async delete(id: string | number ){
        return instance<IProduct>({
            url: `${PRODUCTS}/${id}`, 
            method: 'DELETE'
        })
    }
}