import { Container } from "./styles"
import { LeftColumn, RightColumn } from "./styles";
import { format, parseISO } from "date-fns"
import { SlArrowDown, SlArrowUp } from "react-icons/sl";


interface ICardProps {
    type: string
    data: any
}

const Card = ({ type, data }: ICardProps) => {
    let date1 = format(parseISO(data.createdAt), 'MM/dd/yyyy')
    let date2 = format(parseISO(data.createdAt), 'kk:mm')
    return (
        <>
            {
                type === "in" ? (
                    <Container>
                        <LeftColumn>
                            <h4>Cash-in</h4>
                            <h5>{date1 + " " + date2}</h5>
                        </LeftColumn>
                        <RightColumn>
                            <h6 style={{color: "green"}}>+ R${data.value.replace(".", ",")}</h6>
                        </RightColumn>
                    </Container>
                ) : (
                    <Container>
                        <LeftColumn>
                            <h4>Cash-out</h4>
                            <h5>{format(parseISO(data.createdAt), 'MM/dd/yyyy')}</h5>
                        </LeftColumn>
                        <RightColumn>
                            <h6 style={{color: "var(--red)"}}>- R${data.value.replace(".", ",")}</h6>
                        </RightColumn>
                    </Container>
                )
            }
        </>

    )

}

export default Card