import { StyledHeader } from "./styles";
import { SlLogout } from "react-icons/sl";
import { useUser } from "../../providers/UserContext";
import logo from "../../assets/ng-logo.png"

const Header = () => {
    const style = { color: "var(--white)", cursor: "pointer"}
    const { logout } = useUser()

    return (
        <StyledHeader>
            <div>
                <img src={logo} />
            </div>
            <div>
                <SlLogout size={34} style={style} onClick={()=> logout()}></SlLogout>
            </div>
        </StyledHeader>
    );
}

export default Header;