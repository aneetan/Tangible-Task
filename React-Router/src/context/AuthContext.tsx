import { createContext, useState, type ReactNode } from "react";

type AuthContextType = {
    user: string| null;
    setUser: (user: string) => void;
    username: string;
    setUsername: (username: string) => void;
    password:string;
    setPassword: (password: string) => void;
    role: string;
    setRole: (role: string) => void;
    login: () => void;
    isAuthenticated: () => boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    //create the required states
    const [user, setUser] = useState<string | null>(null);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [role, setRole] = useState<string | null>("");

    const login = () => {
        setUser(username);
        setRole(role);
    }

    const isAuthenticated = () => {
        if(user != null) return true
        else return false
    }

    const logout = () => {
        setUser(null);
        setUsername("");
        setPassword("");
        setRole("");
    }

    return(
        <AuthContext.Provider
        value={{
            username,
            setUsername,
            password,
            setPassword,
            user,
            setUser, 
            role,
            setRole,
            login,
            isAuthenticated,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};