import { Role } from "../redux/user/user.interface";
import { IOrder } from "./order.interface";
import { IProduct } from "./product.interface";

export interface IUser {
    email: string;
    password: string;
    name: string;
    avatarPath: string;
    phone: string;
    role: Role;
}

export interface IFullUser extends IUser {
    favorites: IProduct[], 
    orders: IOrder[]
}