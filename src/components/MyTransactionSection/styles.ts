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
gap: 40px;

h1{
    text-align: center;
    font-size: 30px;
}

.paginationUl{
    display: flex;
    width: 100%;
    max-width: 300px;
    justify-content: space-between;
}
.previousBttn, .nextBttn, .paginationActive{
    font-weight: bold;
    cursor: pointer;
}

.paginationPages{
    cursor: pointer;
}

`

export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 300px;
height: 200px;
gap: 10px;
`

export const FilterDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    max-width: 300px;

    button{
        padding: 5px;
        border-radius: 3px;
        font-family: var(--ibm-sans);
    }
`

export const DateFilterDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;

input{
    padding: 5px;
}
`