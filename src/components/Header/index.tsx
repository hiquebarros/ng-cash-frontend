import { StyledHeader } from "./styles";
import logo from "../../assets/ng-logo.png"
import { SlLogout } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const style = { color: "var(--white)", cursor: "pointer"}
    const navigate = useNavigate()

    return (
        <StyledHeader>
            <div>
                <img src={logo} />
            </div>
            <div>
                <SlLogout size={34} style={style} onClick={()=> navigate}></SlLogout>
            </div>
        </StyledHeader>
    );
}

export default Header;