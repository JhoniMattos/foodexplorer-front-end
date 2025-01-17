import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 7.7rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 0.8rem;

  padding: 2.9rem 2.8rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 14.2rem;
  }
`;

export const Copyright = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  color: ${({ theme }) => theme.COLORS.WHITE_200};
`;
