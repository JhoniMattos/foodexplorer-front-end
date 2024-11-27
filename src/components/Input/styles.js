import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  margin-bottom: 8px;
  border-radius: 5px;

  > input {
    height: 48px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE_500};
      display: flex;
      align-items: center;
      justify-content: end;

      font-size: 16px;
    }
  }
`;
