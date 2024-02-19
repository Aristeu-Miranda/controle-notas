import { ReactNode, createContext, useContext, useEffect } from "react";
import { UserContextType, UserData } from "./UserContext.types";
import { useState } from "react";
import Cookies from "js-cookie";
import { userLogged } from "../../Service/UserService";

export const UserContext = createContext<UserContextType>({ user: null });

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const findUserLogged = async () => {
      try {
        const token = Cookies.get('token');
        if (!token) {
          throw new Error('Token não encontrado.');
        }
        const response = await userLogged();
        const datasUser = response.data[0];
        setUser(datasUser);
      } catch (error) {
        console.error('Erro ao obter usuário:', error);
      }
    };

    findUserLogged();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

