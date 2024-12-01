import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 300px;
  
`;

export const Form = styled.form`
  width: 476px;
  padding: 64px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    align-self: flex-start;
    margin-top: 32px;
    margin-bottom: 8px;     
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > a {
    margin-top: 32px;

    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  Button {
    width: 348px;
    margin-top: 32px;
  }
`;
