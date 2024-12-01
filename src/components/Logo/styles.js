import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

  h1 {
    width: 100%;
    white-space: nowrap;
    display: flex;

    font-size: 42px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;