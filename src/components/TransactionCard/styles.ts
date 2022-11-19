import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 300px;
background-color: var(--grey);
border-radius: 3px;

`

export const LeftColumn = styled.div`
display: flex;
flex-direction: column;
`

export const RightColumn = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
h6{
    font-weight: 500;
}
`
