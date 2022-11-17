import { ReactNode } from "react";

export interface IModalProps{
  children: ReactNode
}

export interface IModalData {
  style: any
  open: boolean
  handleOpen: any
  handleClose: any
  user: any
}