import { ReactNode } from "react";
import { UserProvider } from "./UserContext";
import { ModalProvider } from "./ModalContext";

export interface IProviders {
  children: ReactNode;
}
const Providers = ({ children }: IProviders) => {
  return (
    <ModalProvider>
      <UserProvider>{children}</UserProvider>
    </ModalProvider>
  );
};
export default Providers;
