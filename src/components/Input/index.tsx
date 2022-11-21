import { UseFormRegister } from 'react-hook-form';
import { Container, StyledInput } from './styles';

interface IInputPros {
    label: string | undefined
    error: string | undefined
    name: string
    register: UseFormRegister<any>
    type?: string | undefined
}

const Input = ({label, error, name, register, type}: IInputPros) => {


    return (
        <Container>
            <label>{label}</label>
            <StyledInput type={type} error={error} {...register(name)} ></StyledInput>
            <span>{error}</span>
        </Container>
    );
}

export default Input;