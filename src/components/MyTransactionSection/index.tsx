import { useEffect, useState } from "react";
import axiosInstance from "../../service";
import Card from "../TransactionCard";
import { Content, ImageBox, SectionContainer, TransferBox } from "./styles";
import manhePng from "../../assets/ng-manhe.png"
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const MyTransactionsSection = () => {
    const { id } = useParams()
    const { data } = useFetch(`accounts/${id}`)
    const [ transactions, setTransactions ] = useState<any[]>()
    
    useEffect(() => {
        (
            async function () {
                try {
                    const response = await axiosInstance.get(`/transactions/${id}`)
                    setTransactions(response.data)
                } catch (error) {
                    console.log(error)
                }
            }
        )()
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
                    {transactions && data && transactions.map(item => {
                        if (item.debitedAccount.id === data.account.id) {
                            return <li key={item.id}><Card type="out" data={item} /></li>
                        } else {
                            return <li key={item.id}><Card type="in" data={item} /></li>
                        }
                    })}
                </ul>
                </TransferBox>
            </Content>
        </SectionContainer>
    );
}

export default MyTransactionsSection;