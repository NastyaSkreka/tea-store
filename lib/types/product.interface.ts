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
}

export type TypeProducts = {
    products: IProduct[]
}

export type TypePaginationProducts = {
    lenght: number, 
    products: IProduct[]
}