import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 0.625rem 0.625rem 0.625rem 2.375rem;

  @media screen and (max-width: 1024px) {
    padding: 0.625rem 0rem 0.625rem 0rem;
  }
`;
