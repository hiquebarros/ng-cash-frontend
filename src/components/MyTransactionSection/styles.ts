import styled from "styled-components";

export const SectionContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: var(--white);
padding: 0px 10px;
padding-bottom: 25vh;
`

export const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-width: 1024px;
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

export const TransferBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-basis: 100%;
gap: 50px;

h1{
    text-align: center;
    font-size: 30px;
}

ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color: whitesmoke;
    border-radius: 3px;
    overflow-y: auto;
}

`
export const FilterDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    button{
        padding: 5px;
        border-radius: 3px;
        font-family: var(--ibm-sans);
    }
`