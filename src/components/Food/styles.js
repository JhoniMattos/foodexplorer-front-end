import styled from 'styled-components';

export const Container = styled.div`
  max-width: 30.4rem;
  height: 46.2rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_000};

  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_300};

  border-radius: 0.8rem;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  position: relative;

  svg {
    cursor: pointer;
  }

  > svg { 
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  img {
    max-width: 17.6rem;
    height: 17.6rem;

    cursor: pointer;
  }

  > span {
    font-size: 3.2rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;

export const Title = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  color: ${({ theme }) => theme.COLORS.WHITE_300};

  > h2 {
    width: 100%;
    margin-bottom: 1.5rem;
    
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 140%;
    text-align: center;

    white-space: nowrap;
    text-overflow: ellipsis;
  }

  > p {
    font-size: 1.4rem;
  }
`;

export const Order = styled.div`
  width: 100%;

  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 1.6rem;

  > button {
    width: 9.2rem;
    padding: 1.2rem 2.4rem;
  }
`;
