import { createContext, useContext, useState } from "react";
import { IAuthData, IAuthProps } from "./interfaces";

const AuthContext = createContext<IAuthData>({} as IAuthData);

export const AuthProvider = ({ children }: IAuthProps) => {

  const [token, setToken] = useState<string | undefined>()

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
