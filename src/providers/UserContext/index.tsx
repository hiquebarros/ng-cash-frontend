import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../../service";
import { IUserData, IUserProps } from "./interfaces";

interface IUser {
  id: string
  username: string
  balance: number
}

const UserContext = createContext<IUserData>({} as IUserData);

export const UserProvider = ({ children }: IUserProps) => {
  const [ user, setUser ] = useState<IUser | null>(null)
  const [ transactions, setTransactions ] = useState<any[]>([])

  const fetchUser = async () => {
    const userId = localStorage.getItem("ng-userId")
    try {
      const response = await axiosInstance.get(`http://localhost:3000/accounts/${userId}/`)
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }  

  const fetchTransactions = async (userId: string | undefined) => {
    try {
      const response = await axiosInstance.get(`/transactions/${userId}`)
      setTransactions(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, fetchTransactions, transactions, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
