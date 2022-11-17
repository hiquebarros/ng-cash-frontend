import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: var(--black);
font-family: var(--ibm-sans);
`

/// TRANSFERS

export const TransferBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background-color: var(--white);
gap: 100px;
padding: 0px 10px;

h1{
    text-align: center;
    font-size: 30px;
}
`

export const List = styled.ul`
display: flex;
flex-direction: column;
width: 100%;
max-width: 300px;
background-color: var(--black);
color: var(--white);
border-radius: 3px;
font-family: var(--ibm-sans);
gap: 10px;
padding: 20px;
overflow-y: auto;
max-height: 600px;
li{
    cursor: pointer;
}
li:hover{
    background-color: var(--purple);
}
`