import { useEffect, useState } from "react";
import axiosInstance from "../../service";
import Card from "../TransactionCard";
import { Content, ImageBox, SectionContainer, TransferBox } from "./styles";
import manhePng from "../../assets/ng-manhe.png"
import { useParams } from "react-router-dom";
import { useModal } from "../../providers/ModalContext";
import { useUser } from "../../providers/UserContext";

const MyTransactionsSection = () => {
    const { user, transactions, fetchTransactions } = useUser()

    useEffect(()=> {
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
                    {transactions && user && transactions.map(item => {
                        if (item.debitedAccount.id === user.account.id) {
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