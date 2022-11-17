import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background-color: var(--grey);
`

export const Content = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
max-width: 280px;
padding: 30px 25px;
gap: 15px;
background-color: var(--black);
font-family: var(--ibm-sans);
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
h2{
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
}
`

export const TextBox = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
gap: 5px;
color: var(--white);
.icon{
    color: var(--white);
}
`

export const FormBox = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 5px;
`

export const SpanBox = styled.div`
display: flex;
width: 100%;
justify-content: right;
button{
    color: var(--white);
    background-color: transparent;
    font-size: 14px;
}
`

export const ButtonBox = styled.div`
display: flex;
width: 100%;
margin: 10px 0 0 0;
justify-content: center;
`