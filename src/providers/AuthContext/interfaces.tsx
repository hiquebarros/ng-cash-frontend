import { ReactNode } from "react";

export interface IAuthProps{
  children: ReactNode
}

export interface IAuthData {
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}