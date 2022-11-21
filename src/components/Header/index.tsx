import { StyledHeader } from "./styles";
import { SlLogout } from "react-icons/sl";
import { useUser } from "../../providers/UserContext";
import logo from "../../assets/ng-logo.png"

const Header = ({ dashboard = false }: { dashboard?: boolean }) => {
    const style = { color: "var(--white)", cursor: "pointer"}
    const { logout } = useUser()

    return (
        <StyledHeader>
            <div>
                <img src={logo} />
            </div>
            <div>
                {dashboard ? (<SlLogout size={34} style={style} onClick={()=> logout()}></SlLogout>) : (null)}
            </div>
        </StyledHeader>
    );
}

export default Header;