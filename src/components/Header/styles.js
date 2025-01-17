import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 104px;
  width: 100%;

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.BLACK};

  display: flex;

  padding: 0 124px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  `;
   
export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 32px;

  width: 100%;

  svg:last-child {
    height: 22px;
    width: 26px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  h1 {
    width: 100%;
    white-space: nowrap;
    display: flex;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  Input {
    display: flex;
    text-align: center;
  }

  button {
    width: 190px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-top: 0;
    margin-bottom: 8px;
    font-family: "Poppins", serif;
    font-size: 14px;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.WHITE};
  
  
  > svg {    
    margin-right: 80px;
  }
`;

