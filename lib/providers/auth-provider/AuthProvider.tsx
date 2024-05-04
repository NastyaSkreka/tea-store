"use client"
import { FC, PropsWithChildren, useEffect } from "react";
import { useActions } from "@/lib/hooks/useActions";
import { getAccessToken } from "@/lib/services/auth/auth.helper";
import Cookies from 'js-cookie'
import { useAuth } from "@/lib/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { REFRESH_TOKEN } from "@/lib/constants/token.constants";
import { protectedRoutes } from "./protected-routes.data";
import { Role } from "@/lib/redux/user/user.interface";

// TODO: I will finish the provider when the admin panel is ready

const AuthProvider: FC<PropsWithChildren<unknown>> = ({
    children
}
) => {
    const { user } = useAuth()
    const { checkAuth, logout } = useActions()

    const pathname = usePathname()

    useEffect(() => {
        const accessToken = getAccessToken()
        if (accessToken) checkAuth()
    }, [])

    useEffect(() => {
        const refreshToken = Cookies.get(REFRESH_TOKEN)
        if (!refreshToken && user)
            logout()
    })

    const router = useRouter()
    const isProtectedRoute = protectedRoutes.some(route => pathname?.startsWith(route))
   // const isAdminRoute = pathname?.startsWith(ADMIN_PANEL_URL)

  // if (!isProtectedRoute && !isAdminRoute) return <>{children}</>
  if (!isProtectedRoute) return <>{children}</>

  if (user?.role  === Role.ADMIN)  return <>{children}</>

  if (user && isProtectedRoute) return <>{children}</>

  // pathname !== '/explore' && router.replace('/explore')
  // return null
}

export default AuthProvider;