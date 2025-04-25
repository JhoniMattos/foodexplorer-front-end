import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-left: 1.4rem;
  flex-grow: 1;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  input {
    max-width: 28.2rem;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;