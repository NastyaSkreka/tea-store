import { getContentType } from '@/lib/api/api.helper'
import { IAuthResponse, IEmailPassword } from '@/lib/redux/user/user.interface'
import axios from 'axios'
import Cookies from 'js-cookie'
import { saveToStorage } from './auth.helper'
import { instance } from '@/lib/api/api.interceptor'


export const AuthService = {

    async main(type: 'login' | 'register', data: IEmailPassword) {
        console.log("AuthService main login data => ",data )
        const responce = await instance<IAuthResponse>({
            url: `/auth/${type}`, 
            method: 'POST',
            data
        })

        if (responce.data.accessToken) saveToStorage(responce.data)
        return responce.data
    }, 

    async getNewTokens() {
        const refreshToken = Cookies.get('refreshToken')

        const responce = await axios.post<string, { data: IAuthResponse }>(
            process.env.NEXT_PUBLIC_API_URL + '/auth/login/access-token', 
            { refreshToken },
            {
                headers: getContentType()
            }
        )

        if (responce.data.accessToken) saveToStorage(responce.data)

        return responce;
    }

}

