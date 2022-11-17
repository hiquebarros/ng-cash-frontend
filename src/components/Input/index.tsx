import { Container, StyledInput } from './styles';

const Input = ({label, error, name, register, type}: any) => {

    return (
        <Container>
            <label>{label}</label>
            <StyledInput type={type} error={error} {...register(name)} ></StyledInput>
            <span>{error}</span>
        </Container>
    );
}

export default Input;