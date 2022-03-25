import jwt_decode, { JwtPayload } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { IProvidersProps } from "../../types";

interface IAuthProps {
    token: string;
    updateToken: (newToken: string, newRefreshToken: string) => void;
    refreshToken: string;
    cleanToken: () => void;
}

const AuthContext = createContext({} as IAuthProps)
export const AuthProvider = ({children} : IProvidersProps) => {
    const [token, setToken] = useState(localStorage.getItem("@ioasys-books-token") || "");
    const [refreshToken, setRefreshToken] = useState(
		localStorage.getItem("@ioasys-books-refresh") || ""
	);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=> {
        if (token && refreshToken) {
            const tokenExpDate: number = jwt_decode<JwtPayload>(token).iat!;
            const refreshTokenExpDate: number = jwt_decode<JwtPayload>(refreshToken).iat!;
            const now = new Date().getTime();
            if (tokenExpDate < now) {
                if (refreshTokenExpDate < now) {
                    setToken("");
                    setRefreshToken("");
                    localStorage.clear();
                    window.location.href = '/login';
                    return;
                };
                api.post("auth/refresh-token", {refreshToken}).then(response => {
                    const token = response.headers['authorization'];
                    const refreshToken = response.headers['refresh-token'];

                    updateToken(token, refreshToken)
                });
            };
        };
    });

    const updateToken = (token: string, refreshToken: string) => {
        setToken(token);
        localStorage.setItem("@ioasys-books-token", token);
        setRefreshToken(refreshToken);
        localStorage.setItem("@ioasys-books-refresh", refreshToken)
    };

    const cleanToken = () => {
        setToken("");
        setRefreshToken("");
        localStorage.clear();
    }
    return (
        <AuthContext.Provider
            value={{
                token,
                refreshToken,
                updateToken,
                cleanToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)