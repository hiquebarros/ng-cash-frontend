import styled from "styled-components"

interface Props {
    error: any
}

export const Container = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin: 5px 0;
color: var(--white);

label{
    font-size: 18px;
}
span{
    font-size: 14px;
}
`

export const StyledInput = styled.input<Props>`
border: none;
height: 30px;
border-radius: 2px;
margin: 5px 0px;
padding-left: 5px;
background-color: ${props => props.error ? ("#FFCCCB") : ("var(--white)")};
`