import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

`;