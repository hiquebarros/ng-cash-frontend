import { useEffect, useState } from "react";
import Card from "../TransactionCard";
import { Content, FilterDiv, ImageBox, SectionContainer, TransferBox } from "./styles";
import manhePng from "../../assets/ng-manhe.png"
import { useUser } from "../../providers/UserContext";
import { format } from "date-fns/esm";
import { parseISO } from "date-fns";

const MyTransactionsSection = () => {
    const { user, transactions, fetchTransactions, fetchCashIn, fetchCashOut, fetchByDate } = useUser()
    const [date, setDate] = useState<any>(null)

    useEffect(() => {
        const userId = localStorage.getItem("ng-userId")
        fetchTransactions(userId)
    }, [])

    return (
        <SectionContainer>
            <Content>
                <ImageBox>
                    <img src={manhePng}></img>
                </ImageBox>
                <TransferBox>
                    <h1>Minhas transferências</h1>
                    <ul>
                        {
                            transactions && transactions.length === 0 ? (<>Histórico vazio</>) : (null)
                        }
                        {
                            transactions && user && transactions.map(item => {
                                if (item.debitedAccount.id === user.account.id) {
                                    return <li key={item.id}><Card type="out" data={item} /></li>
                                } else {
                                    return <li key={item.id}><Card type="in" data={item} /></li>
                                }
                            })
                        }

                    </ul>
                    <FilterDiv>
                        <button onClick={() => fetchCashIn(user.id)}>Apenas cash-in</button>
                        <button onClick={() => fetchCashOut(user.id)}>Apenas cash-out</button>
                        <div>
                            <input type="date" onChange={(e) => setDate(e.target.value)}></input>
                            <button onClick={() => fetchByDate(user.id, format(parseISO(date), 'dd/MM/yyyy'))}>Filtrar por data</button>
                        </div>
                        <button onClick={() => fetchTransactions(user.id)}>Zerar filtro</button>
                    </FilterDiv>
                </TransferBox>
            </Content>
        </SectionContainer>
    );
}

export default MyTransactionsSection;