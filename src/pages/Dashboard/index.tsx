import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container} from "./styles";
import { Toaster } from "react-hot-toast";
import Header from "../../components/Header";
import InfoSection from "./components/InfoSection";
import TransactionListSecton from "./components/TransactionsSection";
import MyTransactionsSection from "./components/MyTransactionSection";
import Footer from "../../components/Footer";

const Dashboard = () => {

    let navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("ng-token")
        if(!token){
            navigate('/')
        }
    }, [])


    return (
        <>
            <Header dashboard={true}/>
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