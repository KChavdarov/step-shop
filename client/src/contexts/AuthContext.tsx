import { createContext, ReactElement, useEffect, useState } from "react";
import { User } from "../types/User";
import * as authService from "../services/authService";


type Props = {
    children: ReactElement | ReactElement[],
}

type AuthContext = {
    user: User | null,
    login: (email: string, password: string) => Promise<void>,
    register: (email: string, password: string) => Promise<void>,
    logout: () => Promise<void>
}

const initialState = {
    user: null,
    login: async () => { },
    register: async () => { },
    logout: async () => { },
};

export const AuthContext = createContext<AuthContext>(initialState);

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => { loadUser(); }, []);

    async function login(email: string, password: string) {
        const newUser = await authService.login(email, password);
        sessionStorage.setItem('user', JSON.stringify(newUser));
        setUser(() => newUser);
    }

    async function register(email: string, password: string) {
        const newUser = await authService.register(email, password);
        sessionStorage.setItem('user', JSON.stringify(newUser));
        setUser(() => newUser);
    }

    async function logout() {
        await authService.logout(user?.authToken || '');
        sessionStorage.clear();
    }

    async function loadUser() {
        const currentUser = sessionStorage.getItem('user');
        setUser(() => currentUser && JSON.parse(currentUser));
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}