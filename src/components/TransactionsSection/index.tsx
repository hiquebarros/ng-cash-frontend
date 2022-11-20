import { useEffect, useState } from "react"
import { Box, Modal } from "@mui/material"
import { useParams } from "react-router-dom"
import { useModal } from "../../providers/ModalContext"
import { AlertDiv, Container, Content, ImageBox, List, TransferBox } from "./styles"
import axiosInstance from "../../service"
import TransferModal from "../TransferModal"
import ngHangLoose from "../../assets/ng-asset.png"

interface IUser {
    id: string
    username: string
    password: string
}

const TransactionListSecton = () => {
    let { id } = useParams();

    const [ users, setUsers ] = useState<IUser[]>()
    
    const {open, handleClose, handleOpen, style, user} = useModal()

    useEffect(() => {
        (
            async function () {
                try {
                    const response = await axiosInstance.get("/users")
                    setUsers(response.data)
                } catch (error) {
                    console.log(error)
                }
            }
        )()
    }, [])

    return (
        <Container>
            <Content>
                <TransferBox>
                    <List>
                        <h2>Escolha um usuário para realizar uma transferência:</h2>
                        {users && users.map(item => {
                            if (item.id !== id) {
                                return <li key={item.id} onClick={() => handleOpen(item)}><h5>@{item.username}</h5></li>
                            }
                        })}
                        {users && users.length < 2 ? (<AlertDiv><p>Não há usuários cadastrados</p></AlertDiv>) : (null)}
                    </List>
                </TransferBox>
                <ImageBox>
                    <img src={ngHangLoose}></img>
                </ImageBox>
            </Content>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TransferModal user={user} />
                </Box>
            </Modal>
        </Container>
    );
}

export default TransactionListSecton;