import { createContext, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";

type Role = 'Admin' | 'User' | ''; 

type User = {
    role: Role;
    username: string | null;
}

type AuthContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    username: string;
    setUsername: (username: string) => void;
    password:string;
    setPassword: (password: string) => void;
    role: Role;
    setRole: (role: Role) => void;
    login: (username: string, role: Role) => User;
    isAuthenticated: () => boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    //create the required states
    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [role, setRole] = useState<Role>("User");
    const navigate = useNavigate();

    const login = (username: string, role: Role) => {
        setRole(role);
        const userData = { 
          username,
          role: role  
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));

        if (role === "Admin") {
            navigate('/dashboard', { replace: true });
        } else {
            navigate('/home', { replace: true });
        }

        return userData;
    }

    const isAuthenticated = () => {
        if(user != null) return true
        else return false
    }

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setUsername("");
        setPassword("");
        setRole("");
        navigate("/");
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