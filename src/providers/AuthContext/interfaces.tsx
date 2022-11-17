import { ReactNode } from "react";

export interface IAuthProps{
  children: ReactNode
}

export interface IAuthData {
  user: any
  setUserFunction: (prop: any) => void
}