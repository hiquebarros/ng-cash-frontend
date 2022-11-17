import { createContext, useContext, useState } from "react";
import { IModalData, IModalProps } from "./interfaces";

const ModalContext = createContext<IModalData>({} as IModalData);

export const ModalProvider = ({ children }: IModalProps) => {
    const [user, setUser] = useState()

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
        maxWidth: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    
    const handleOpen = (user: any) => {
        setOpen(true);
        setUser(user)
    }
    const handleClose = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ style, handleClose, handleOpen, open, user }}>
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => useContext(ModalContext);