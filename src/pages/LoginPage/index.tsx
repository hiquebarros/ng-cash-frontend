import { useEffect } from "react";
import { ButtonBox, Container, Content, FormBox, SpanBox, TextBox } from './styles';
import { SlLogin } from "react-icons/sl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../providers/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import axiosInstance from "../../service";
import Input from "../../components/Input"
import Button from '../../components/Button';
import * as yup from "yup";
import toast, { Toaster } from 'react-hot-toast';
import Header from "../../components/Header";

interface ILoginData {
    username: string
    password: string
}

const LoginPage = () => {
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        username: yup.string().required("Campo obrigatório!").min(3, "Username deve ter no mímino 3 caracteres"),
        password: yup.string().required("Campo obrigatório!")
        .min(8, "Sua senha deve conter ao menos 8 caracteres")
        .matches(/.*\d/, "Sua senha deve conter ao menos um dígito")
        .matches(/.*[A-Z]/, "Sua senha deve conter ao menos uma letra maiúscula")
    });

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginData>({ resolver: yupResolver(formSchema) });

    const { fetchUser } = useUser()

    useEffect(() => {
        const token = localStorage.getItem("ng-token")
        const userId = localStorage.getItem("ng-userId")
        if (token) {
            return navigate(`/dashboard/${userId}`)
        }
    }, [])


    const onSubmitFunction = async (data: ILoginData) => {
        try {
            const response = await axiosInstance.post('http://localhost:3000/users/login/', data)
            localStorage.setItem('ng-token', response.data.token)
            localStorage.setItem('ng-accountId', response.data.accountId)
            localStorage.setItem('ng-userId', response.data.userId)
            axiosInstance.defaults.headers.Authorization = `Bearer ${response.data.token}`
            await fetchUser(response.data.userId)
            toast.success('Bem vindo!')
            setTimeout(() => {
                navigate(`/dashboard/${response.data.userId}`)
            }, 1000);
        } catch (error: any) {
            toast.error(`${error.response.data.message}`)
        }
    }



    return (
        <>
        <Header />
        <Container>
            <Content onSubmit={handleSubmit(onSubmitFunction)}>
                <TextBox>
                    <SlLogin size={26} className='icon' />
                    <h2>Login</h2>
                </TextBox>
                <FormBox>
                    <Input error={errors.username?.message} label={"username"} name={"username"} register={register}></Input>
                    <Input type='password' error={errors.password?.message} label={"password"} name={"password"} register={register}></Input>
                </FormBox>
                <SpanBox>
                    <button type="button" onClick={() => navigate("/register")}>Ainda não possui conta?</button>
                </SpanBox>
                <ButtonBox>
                    <Button>Enviar</Button>
                </ButtonBox>
            </Content>
            <Toaster position="top-right" containerStyle={{ padding: "20px" }} />
        </Container>
        </>
    );
}

export default LoginPage;