import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE_300};

  button {
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE_300};
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media (min-width: 1024px) {
    svg,
    span {
      font-size: 2rem;
      font-weight: 700;
      line-height: 160%;
    }
  }
`;