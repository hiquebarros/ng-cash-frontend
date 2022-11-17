import { Box, Modal } from "@mui/material"
import { useEffect, useState } from "react"
import axiosInstance from "../../service"
import TransferModal from "../TransferModal"
import { Container, Content, ImageBox, List, TransferBox } from "./styles"
import ngHangLoose from "../../assets/ng-asset.png"

interface IUser {
    id: string
    username: string
    password: string
}

const TransactionListSecton = ({ id }: any) => {
    const [users, setUsers] = useState<IUser[]>()
    const [user, setUser] = useState()

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
        maxWidth: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = (user: any) => {
        setOpen(true);
        setUser(user)
    }
    const handleClose = () => setOpen(false);

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