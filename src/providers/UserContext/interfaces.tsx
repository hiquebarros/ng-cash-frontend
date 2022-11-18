import { ReactNode } from "react";

export interface IUserProps{
  children: ReactNode
}

export interface IUserData {
  user: any
  setUser: any
  fetchUser: (userId: string | null) => void
  fetchTransactions: any
  transactions: any[] | undefined
}