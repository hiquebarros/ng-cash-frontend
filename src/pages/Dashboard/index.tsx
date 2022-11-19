import axios from "axios";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Container, List, TransferBox } from "./styles";
import { Toaster } from "react-hot-toast";
import InfoSection from "../../components/InfoSection";
import TransactionListSecton from "../../components/TransactionsSection";
import MyTransactionsSection from "../../components/MyTransactionSection";
import Footer from "../../components/Footer";
import { useUser } from "../../providers/UserContext";

const Dashboard = () => {

    const { isAuthenticated } = useUser()
    let navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            return navigate("/")
        }
    }, [isAuthenticated])

    return (
        <>
            <Header />
            <Container>
                <InfoSection />
                <TransactionListSecton />
                <MyTransactionsSection />
                <Footer />
            </Container>
            <Toaster />
        </>
    );
}

export default Dashboard;