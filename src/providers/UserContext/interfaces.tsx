import { ReactNode } from "react";

export interface IUserProps{
  children: ReactNode
}

export interface IUserData {
  user: any
  setUser: any
  fetchUser: (userId: string | null) => void
  fetchTransactions: any
  fetchCashIn: (userId: string) => void
  fetchCashOut: (userId: string) => void
  fetchByDate: (userId: string, date: string) => void
  transactions: any[] | undefined
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  logout: () => void
}