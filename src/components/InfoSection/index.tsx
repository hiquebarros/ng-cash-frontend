import { BalanceBox, UserIcon, Container } from "./styles";
import { useUser } from "../../providers/UserContext";
import { useEffect } from "react";

const InfoSection = () => {
    const { user, fetchUser } = useUser()

    useEffect(() => {
        const userId = localStorage.getItem('ng-userId')
        fetchUser(userId)
    }, [])

    return (
        <Container>
            <div>
                <UserIcon>{user && user.username.split("")[0].toUpperCase()}</UserIcon>
                <h1>@{user && user.username}</h1>
            </div>
            <BalanceBox>
                <h2>Saldo: R$ {user && user.account.balance.toFixed(2).replace('.', ',')}</h2>
            </BalanceBox>
        </Container>
    );
}

export default InfoSection;