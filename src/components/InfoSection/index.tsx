import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BalanceBox, UserIcon, Container } from "./styles";

const InfoSection = () => {
    const { id } = useParams()
    const { data } = useFetch(`accounts/${id}`)
    return (
        <Container>
            <div>
                <UserIcon>{data && data.username.split("")[0].toUpperCase()}</UserIcon>
                <h1>@{data && data.username}</h1>
            </div>
            <BalanceBox>
                <h2>Saldo: R$ {data && data.account.balance.toFixed(2).replace('.', ',')}</h2>
            </BalanceBox>
        </Container>
    );
}

export default InfoSection;