import { createContext } from "react";
import { UserContextProps } from "./UserContext.types";
import { useState } from "react";

export const UserContext = createContext<UserContextProps | any>(undefined);;
UserContext.displayName = "Nome do usuário";

export default function UserProvider({ children }: UserContextProps) {
    const [user, setUser] = useState<string>(""); 

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}