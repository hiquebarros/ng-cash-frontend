import { createContext, useContext, useState } from "react";
import { IAuthData, IAuthProps } from "./interfaces";

const AuthContext = createContext<IAuthData>({} as IAuthData);

export const AuthProvider = ({ children }: IAuthProps) => {
  const [user, setUser] = useState()

 const setUserFunction = (prop: any) => {
    setUser(prop)
  }

  return (
    <AuthContext.Provider value={{ user, setUserFunction }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
