import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
width: 300px;
background-color: var(--grey);
border-radius: 3px;
padding: 10px;
`

export const LeftColumn = styled.div`
display: flex;
flex-direction: column;
width: 70%;
`

export const RightColumn = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30%;
gap: 5px;
h6{
    font-weight: 500;
}
`
