import styled from "styled-components";

interface Props{
    error: string | undefined
}

export const Container = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
font-family: var(--ibm-sans);
`
export const StyledInput = styled.input<Props>`
border: 1px solid black;
height: 30px;
border-radius: 3px;
border: 1px solid var(--black);
padding: 0px 5px;
background-color: ${props => props.error ? ("#FFCCCB") : ("var(--white)")};
`