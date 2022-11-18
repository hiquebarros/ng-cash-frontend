import Button from "../Button";
import { Container, StyledInput } from "./style"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import { currencyMask } from "./currencyMask";
import axiosInstance from "../../service";
import toast from "react-hot-toast";
import { useUser } from "../../providers/UserContext";

interface IFormData{
    value: string
}

const TransferModal = ({user}: any) => {

    const {fetchUser, fetchTransactions} = useUser()

    const [inputState, setInputState] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputState(e.target.value)
    }

    const formSchema = yup.object().shape({
        value: yup.string().required("Campo obrigatório!"),
      });
    
      const { register, handleSubmit, formState: { errors } } = useForm<IFormData>({ resolver: yupResolver(formSchema) });

      const onSubmitFunction = async (data: IFormData) => {
        const valueNumber = parseFloat(data.value)
        const req = {
            value: valueNumber
        }
        try {
            const response = await axiosInstance.post(`/transactions/${user.id}`, req)
            toast.success(`R$ ${response.data.value} foram enviados para ${user.username}`)
            const userId = localStorage.getItem('ng-userId')
            fetchUser(userId)
            fetchTransactions(userId)
            
        } catch (error) {
            toast.error("Erro")
        }
      }

    return (
        <Container onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>{`Transferir para: @${user.username}`}</h1>
            <label>Valor:</label>
            <StyledInput error={errors.value?.message} value={inputState} {...register("value")} onChange={(e) => handleChange(currencyMask(e))}/>
            <a>{errors.value?.message}</a>
            <Button>Enviar</Button>
        </Container>
    );
}

export default TransferModal;