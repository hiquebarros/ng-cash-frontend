import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: calc(100vh - 80px);
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  h1 {
    color: var(--white);
    font-size: 22px;
  }
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  border-radius: 50%;
  font-weight: bold;
  width: 125px;
  height: 125px;
  font-size: 36px;
`;

export const BalanceBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--purple);
  color: var(--black);
  padding: 10px;
  border-radius: 3px;
  width: 200px;
  font-size: 20px;
`;
