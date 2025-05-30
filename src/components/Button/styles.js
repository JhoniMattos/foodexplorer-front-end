import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: 0;
  padding: 1.2rem 2.4rem;
  border-radius: 5px;

  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  line-height: 2.4rem;

  position: relative;

  > span {
    position: absolute;
    top: -0.4rem;
    right: -0.6rem;

    background-color: ${({ theme }) => theme.COLORS.RED_100};
    border-radius: 99px;
    padding-inline: 0.6rem;
  }

  &:disabled {
    opacity: 0.4;
  }

  @media (min-width: 1024px;) {
    gap: 0.8rem;
    padding: 1.2rem 3.2rem;
  }

  > span {
    position: initial;
    padding-inline: 0;
  }
`;
