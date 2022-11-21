import { useEffect, useState } from "react";
import { CardWrapper, Content, DateFilterDiv, FilterDiv, ImageBox, SectionContainer, TransferBox } from "./styles";
import { useUser } from "../../../../providers/UserContext";
import { format } from "date-fns/esm";
import { parseISO } from "date-fns";
import Card from "../../../../components/TransactionCard";
import manhePng from "../../../../assets/ng-manhe.png"
import ReactPaginate from "react-paginate";

const MyTransactionsSection = () => {
    const { user, transactions, fetchTransactions, fetchCashIn, fetchCashOut, fetchByDate } = useUser()
    const [date, setDate] = useState<string>("null")

    useEffect(() => {
        const userId = localStorage.getItem("ng-userId")
        fetchTransactions(userId!)
    }, [])

    const [pageNumber, setPageNumber] = useState(0);

    const transactionsPerPage = 3;
    const pagesVisited = pageNumber * transactionsPerPage;

    const displayTransactions = transactions?.slice(pagesVisited, pagesVisited + transactionsPerPage)

    const pageCount = Math.ceil(transactions!.length / transactionsPerPage);

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    };

    let accountId = localStorage.getItem("ng-accountId")

    return (
        <SectionContainer>
            <Content>
                <ImageBox>
                    <img src={manhePng}></img>
                </ImageBox>
                <TransferBox>
                    <h1>Minhas transferências</h1>
                    {displayTransactions!
                        .length > 0 ? (<CardWrapper>
                            {displayTransactions?.map(item => {
                                if (item.creditedAccount.id === accountId) {
                                    return <Card key={item.id} type="in" data={item} />
                                }
                                if (item.debitedAccount.id === accountId) {
                                    return <Card key={item.id} type="out" data={item} />
                                }
                            })}
                        </CardWrapper>) : (<CardWrapper><h5>Não há histórico de transferências</h5></CardWrapper>)}

                    {pageCount >= 2 ? (<ReactPaginate previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationUl"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                        pageClassName={"paginationPages"} />) : (null)}


                    <FilterDiv>
                        <button onClick={() => fetchCashIn(user!.id)}>Apenas cash-in</button>
                        <button onClick={() => fetchCashOut(user!.id)}>Apenas cash-out</button>
                        <DateFilterDiv>
                            <input type="date" onChange={(e) => setDate(e.target.value)}></input>
                            <button onClick={() => fetchByDate(user!.id, format(parseISO(date), 'dd/MM/yyyy'))}>Filtrar por data</button>
                        </DateFilterDiv>
                        <button onClick={() => fetchTransactions(user!.id)}>Zerar filtro</button>
                    </FilterDiv>
                </TransferBox>
            </Content>
        </SectionContainer>
    );
}

export default MyTransactionsSection;