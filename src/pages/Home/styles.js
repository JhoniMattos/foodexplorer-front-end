import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    justify-self: center;

    width: 100vw;

    > div {
      margin: 16.4rem 12.4rem 6.2rem;

      header {
        height: 26rem;

        background: linear-gradient(
          180deg,
          ${({ theme }) => theme.COLORS.GRADIENT_100} 0%,
          ${({ theme }) => theme.COLORS.GRADIENT_200} 100%
        );
        border-radius: 0.3rem;

        position: relative;

        img {
          width: 65.6rem;
          height: 41.2rem;

          position: absolute;
          left: -6rem;
          bottom: 0;
        }

        div {
          position: absolute;
          top: 7.1rem;
          right: 10rem;

          color: ${({ theme }) => theme.COLORS.WHITE_300};

          h1 {
            font-family: "Poppins", sans-serif;
            font-size: 4rem;
            font-weight: 500;
          }

          p {
            font-weight: 100;
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
`;
