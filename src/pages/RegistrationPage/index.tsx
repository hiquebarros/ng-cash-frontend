import { ButtonBox, Container, Content, FormBox, SpanBox, TextBox } from './styles';
import { SlNote } from "react-icons/sl";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input"
import Button from '../../components/Button';
import axios from "axios"
import Header from '../../components/Header';

interface IRegisterData{
    username: string
    password: string
}

const RegistrationPage = () => {
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        username: yup.string().required("Campo obrigatório!"),
        password: yup.string().required("Campo obrigatório!").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Mínimo 8 caracteres, um maiúsculo, um número e um caracter especial")
      });
    
      const { register, handleSubmit, formState: { errors } } = useForm<IRegisterData>({ resolver: yupResolver(formSchema) });

      const onSubmitFunction = async (data: IRegisterData) => {
          try {
            await axios.post('http://localhost:3000/users/', data)
            toast.success('Conta criada!')
            setTimeout(() => {
                navigate('/')
           }, 1000);
        } catch (error: any) {
            console.log(error)
            toast.error(`${error.response.data.message}`)
        }
      }


    return (
        <>
        <Header />
        <Container>
            <Content onSubmit={handleSubmit(onSubmitFunction)}>
                <TextBox>
                    <SlNote size={26} className='icon'/>
                    <h2>Cadastre-se</h2>
                </TextBox>
                <FormBox>
                    <Input error={errors.username?.message} label={"username"} name={"username"} register={register}></Input>
                    <Input type='password' error={errors.password?.message} label={"password"} name={"password"} register={register}></Input>
                </FormBox>
                <SpanBox>
                    <button onClick={() => navigate("/")}>Já possui uma conta?</button>
                </SpanBox>
                <ButtonBox>
                    <Button>Enviar</Button>
                </ButtonBox>
            </Content>
            <Toaster position="top-right" containerStyle={{padding: "20px"}} />
        </Container>
        </>
    );
}

export default RegistrationPage;