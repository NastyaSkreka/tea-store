import { IOrder } from "./order.interface";
import { IProduct } from "./product.interface";

export interface IUser {
    email: string;
    password: string;
    name: string;
    avatarPath: string;
    phone: string;
    role?: "ADMIN" | "USER";
}

export interface IFullUser extends IUser {
    favorites: IProduct[], 
    orders: IOrder[]
}