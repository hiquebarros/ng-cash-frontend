import styled from "styled-components"

export const Container = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: var(--white);
`
export const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
background-color: var(--white);
max-width: 1024px;
`

export const TransferBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-basis: 100%;
gap: 100px;

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
    border-radius: 3px;
    padding: 2px;
    h5{
        font-weight: 400;
    }
        
}
li:hover{
    background-color: var(--purple);
}
`

export const ImageBox = styled.div`
display: none;
justify-content: center;
align-items: center;
flex-basis: 100%;
img{
    display: block;
    width: 100%;
    height: 100%;
    max-width: 450px;
    max-height: 450px;
}
@media (min-width: 768px){
    display: flex;
}
`