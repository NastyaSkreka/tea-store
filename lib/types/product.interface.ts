import { ICategory } from "./category.interface";
import { IReview } from "./review.interface";

export interface IProduct{
    id: number;
    createdAt: string;
    name: string;
    price: number;
    description: string;
    image: string;
    miles: string;
    time: string;
    reviews: IReview[];
    category: ICategory;
    slug: string;
}

export type TypeProducts = {
    products: IProduct[]
}

export type TypePaginationProducts = {
    length: number, 
    products: IProduct[]
}

