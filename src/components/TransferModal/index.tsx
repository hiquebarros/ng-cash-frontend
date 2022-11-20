import React, { useState } from "react";
import { Container, StyledInput } from "./style"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { currencyMask } from "./currencyMask";
import { useUser } from "../../providers/UserContext";
import { IFormData, IModalProps } from "./interfaces";
import axiosInstance from "../../service";
import Button from "../Button";
import * as yup from "yup";
import toast from "react-hot-toast";

const TransferModal = ({user}: IModalProps) => {

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
            fetchTransactions(userId!)
            
        } catch (error: any) {
            toast.error(error.response.data.message)
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