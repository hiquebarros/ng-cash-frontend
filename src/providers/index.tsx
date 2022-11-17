import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

export interface IProviders {
  children: ReactNode;
}
const Providers = ({ children }: IProviders) => {
  return (
    <AuthProvider>{children}</AuthProvider>
  );
};
export default Providers;
