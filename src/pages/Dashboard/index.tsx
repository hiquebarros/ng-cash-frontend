import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import useFetch from "../../hooks/useFetch";
import axiosInstance from "../../service";
import { Container, List, TransferBox } from "./styles";
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";
import TransferModal from "../../components/TransferModal";
import { Toaster } from "react-hot-toast";
import InfoSection from "../../components/InfoSection";
import TransactionListSecton from "../../components/TransactionsSection";
import MyTransactionsSection from "../../components/MyTransactionSection";
import Footer from "../../components/Footer";

const Dashboard = () => {

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