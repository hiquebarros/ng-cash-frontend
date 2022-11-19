import { StyledHeader } from "./styles";
import logo from "../../assets/ng-logo.png"
import { SlLogout } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../providers/UserContext";

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