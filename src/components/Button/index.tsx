import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface IButtonProps {
    children: ReactNode
    
}

const Button = ({ children }: IButtonProps) => {
    return (<>
        <StyledButton>
            {children}
        </StyledButton>
    </>

    );
}

export default Button;