import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ITransaction, IUser, IUserData, IUserProps } from "./interfaces";
import axiosInstance from "../../service";

const UserContext = createContext<IUserData>({} as IUserData);

export const UserProvider = ({ children }: IUserProps) => {
  const [ user, setUser ] = useState<IUser | null>(null)
  const [ transactions, setTransactions ] = useState<ITransaction[]>([])

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

  const fetchCashIn = async (userId: string | undefined) => {
    try {
      const response = await axiosInstance.get(`/transactions/credited/${userId}`)
      setTransactions(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCashOut = async (userId: string | undefined) => {
    try {
      const response = await axiosInstance.get(`/transactions/debited/${userId}`)
      setTransactions(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchByDate = async (userId: string | undefined, date: string | undefined) => {
    let reqDate = date?.replaceAll('/', "-")
    try {
      const response = await axiosInstance.get(`/transactions/date/${userId}/${reqDate}`)
      setTransactions(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <UserContext.Provider value={{ user, setUser, fetchTransactions, transactions, fetchUser, fetchCashIn, fetchCashOut, fetchByDate, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
