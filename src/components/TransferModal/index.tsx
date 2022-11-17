import Button from "../Button";
import Input from "../Input";
import { Container, StyledInput } from "./style"
import axios from "axios"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import { currencyMask } from "./currencyMask";
import axiosInstance from "../../service";
import toast from "react-hot-toast";

interface IFormData{
    value: string
}

const TransferModal = ({user}: any) => {

    const [inputState, setInputState] = useState<string>()

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
        } catch (error) {
            toast.error("Erro")
        }
      }

    return (
        <Container onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>{`Transferir para: @${user.username}`}</h1>
            <label>Valor:</label>
            <StyledInput value={inputState} {...register("value")} onChange={(e) => handleChange(currencyMask(e))}/>
            <a>{errors.value?.message}</a>
            <Button>Enviar</Button>
        </Container>
    );
}

export default TransferModal;