import styled from "styled-components";

export const FooterContainer = styled.footer`
display: flex;
justify-content: center;
`

export const FooterContent = styled.div`
  background-color: var(--grey0);
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px;
  align-items: center;
  height: 200px;
  max-width: 1750px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: unset;
    justify-content: space-between;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100px;
  }
`;

export const DivRights = styled.div`
  display: flex;
  p{
    color: var(--white);
    font-weight: 400;
    font-size: 12px;
  }
`;

export const DivUp = styled.div`
  display: flex;
  cursor: pointer;
  img {
    height: 35px;
  }
`;
