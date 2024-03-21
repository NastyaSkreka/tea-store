import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IEmailPassword } from "./user.interface";
import { AuthService } from "@/lib/services/auth/auth.service";
import { removeFromStorage } from "@/lib/services/auth/auth.helper";
import { errorCatch } from "@/lib/api/api.helper";

export const register = createAsyncThunk<IAuthResponse, IEmailPassword> (
    'auth/register', 
    async (data, thunkApi) => {
        try{
            const responce  = await AuthService.main('register', data)
            return responce
        } catch (error){
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/login', 
    async (data, thunkApi) => {
        console.log("data =>", data)
        try{
            const responce  = await AuthService.main('login', data)
            console.log("responce =>", responce )
            return responce

        } catch (error){
            console.log("rejectWithValue =>", error  )
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk('auth/logout', async () => {
    removeFromStorage()
})

export const checkAuth = createAsyncThunk(
    'auth/check-auth', 
    async (_, thunkApi) => {
       try {
        const response = await AuthService.getNewTokens()
        return response.data
       } catch (error) {
         if (errorCatch(error) === 'jwt expired') {
            thunkApi.dispatch(logout())
         }

         return thunkApi.rejectWithValue(error)
       }
    } 
)