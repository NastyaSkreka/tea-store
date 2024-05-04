import { ICategory } from "./category.interface";
import { IReview } from "./review.interface";

export interface ICatalog {
    id: number;
    category: ICategory;
    description: string;
    image: string;
    miles: string;
    name: string;
    price: number;
    slug: string;
    time: string;
    reviews: IReview[];
  }