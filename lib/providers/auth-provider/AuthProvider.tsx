import { FC, PropsWithChildren, useEffect } from "react";
import { TypeComponentAuthFields } from "./auth-page.types";
import dynamic from "next/dynamic";
import { useActions } from "@/lib/hooks/useActions";
import { getAccessToken } from "@/lib/services/auth/auth.helper";
import { useRouter } from "next/router";
import Cookies from 'js-cookie'
import { useAuth } from "@/lib/hooks/useAuth";

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {ssr: false}
)

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
    Component: {
        isOnlyUser
    },
    children
}
) => {

    const { user } = useAuth()
    const { checkAuth, logout } = useActions()

    const {pathname} = useRouter()

    useEffect(() => {
        const accessToken = getAccessToken()
        if (accessToken) checkAuth()
    }, [])

    useEffect(() => {
        const refreshToken = Cookies.get('refreshToken')
        if (!refreshToken && user)
            logout()
    })

    return isOnlyUser ? (
        <DynamicCheckRole Component={{ isOnlyUser }}>
            {children}
        </DynamicCheckRole>
    ) : <>{children}</>
}

export default AuthProvider;