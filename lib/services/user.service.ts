import { instance } from "../api/api.interceptor"
import { IUser } from "../types/user.interface"

const USERS = 'users'

export const UserService = {
    async getProfile() {
    
        return instance<IUser>({
            url: `${USERS}/profile`, 
            method: 'GET'
        })
    },

    async updateProfile(data: any) {
        return instance<IUser>({
            url:  `${USERS}/profile`, 
            method: 'PUT', 
            data
        })
    }

}

