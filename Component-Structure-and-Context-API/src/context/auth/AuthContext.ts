import { createContext } from "react";

 export type AuthContextType = {
    user: string| null;
    setUser: (user: string) => void;
    username: string;
    setUsername: (username: string) => void;
    password:string;
    setPassword: (password: string) => void;
    login: () => void;
    isAuthenticated: () => boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);