import Input from "../../components/Input"
import axios from "axios"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonBox, Container, Content, FormBox, SpanBox, TextBox } from './styles';
import { SlLogin } from "react-icons/sl";
import Button from '../../components/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

interface ILoginData{
    username: string
    password: string
}

const LoginPage = () => {
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        username: yup.string().required("Campo obrigatório!"),
        password: yup.string().required("Campo obrigatório!"),
      });
    
      const { register, handleSubmit, formState: { errors } } = useForm<ILoginData>({ resolver: yupResolver(formSchema) });

      const onSubmitFunction = async (data: ILoginData) => {
          try {
            const response = await axios.post('http://localhost:3000/users/login/', data)
            localStorage.setItem('ng-token', response.data.token)
            const decode: {id: string} = jwt_decode(response.data.token)
            toast.success('Bem vindo!')
            setTimeout(() => {
                navigate(`/dashboard/${decode.id}`)
           }, 1000);
        } catch (error: any) {
            toast.error(`${error.response.data.message}`)
        }
      }


    return (
        <Container>
            <Content onSubmit={handleSubmit(onSubmitFunction)}>
                <TextBox>
                    <SlLogin size={26} className='icon'/>
                    <h2>Login</h2>
                </TextBox>
                <FormBox>
                    <Input error={errors.username?.message} label={"username"} name={"username"} register={register}></Input>
                    <Input type='password' error={errors.password?.message} label={"password"} name={"password"} register={register}></Input>
                </FormBox>
                <SpanBox>
                    <button onClick={() => navigate("/register")}>Ainda não possui conta?</button>
                </SpanBox>
                <ButtonBox>
                    <Button>Enviar</Button>
                </ButtonBox>
            </Content>
            <Toaster position="top-right" containerStyle={{padding: "20px"}} />
        </Container>
    );
}

export default LoginPage;