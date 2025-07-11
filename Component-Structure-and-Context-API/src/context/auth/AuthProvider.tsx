import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<string | null>(null);
        const [username, setUsername] = useState<string>("");
        const [password, setPassword] = useState<string>("");
    
        const login = () => {
            setUser(username);
        }
    
        const isAuthenticated = () => {
            if(user != null) return true
            else return false
        }
    
        const logout = () => {
            setUser(null);
            setUsername("");
            setPassword("");
        }

    return (
        <AuthContext.Provider value={{
            username, 
            setUsername,
            password,
            setPassword,
            user,
            setUser,
            login,
            isAuthenticated,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )

}