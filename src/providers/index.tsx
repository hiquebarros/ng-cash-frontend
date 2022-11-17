import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { ModalProvider } from "./ModalContext";

export interface IProviders {
  children: ReactNode;
}
const Providers = ({ children }: IProviders) => {
  return (
    <ModalProvider>
      <AuthProvider>{children}</AuthProvider>
    </ModalProvider>
  );
};
export default Providers;
