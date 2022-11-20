import { ReactNode } from "react";

export interface IUserProps{
  children: ReactNode
}

export interface IUserData {
  user: IUser | null
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
  fetchUser: (userId: string | null) => void
  fetchTransactions: (userId: string) => void
  fetchCashIn: (userId: string) => void
  fetchCashOut: (userId: string) => void
  fetchByDate: (userId: string, date: string) => void
  transactions: ITransaction[] | undefined
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  logout: () => void
}

export interface IUser {
  id: string
  username: string
  balance: number
  account: IAccount
}

export interface IAccount {
  id: string
  balance: number
}

export interface ITransaction {
  id: string
  debitedAccount: IAccount
  creditedAccount: IAccount
  createdAt: string
}