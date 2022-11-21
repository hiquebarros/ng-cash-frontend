import { ReactNode } from "react";

export interface IModalProps{
  children: ReactNode
}

export interface IModalData {
  style: IStyle
  open: boolean
  handleOpen: (user: IUser) => void
  handleClose: () => void
  user: any
}

export interface IUser {
  id: string
  username: string
  password: string
}

export interface IStyle {
    position: "absolute";
    top: string;
    left: string;
    transform: string;
    width: string;
    maxWidth: number;
    bgcolor: string;
    border: string;
    boxShadow: number;
    p: number;
}