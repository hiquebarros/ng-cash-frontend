import { ReactNode } from "react";

export interface IUserProps{
  children: ReactNode
}

export interface IUserData {
  user: IUser | null
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
  fetchUser: (userId: string | null) => Promise<void>
  fetchTransactions: (userId: string) => Promise<void>
  fetchCashIn: (userId: string) => Promise<void>
  fetchCashOut: (userId: string) => Promise<void>
  fetchByDate: (userId: string, date: string) => Promise<void>
  transactions: ITransaction[] | undefined
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