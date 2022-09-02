import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 0.625rem 0 0.625rem 1.75rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const GridItem1 = styled.div`
  padding-right: 1rem;
`;

export const GridItem2 = styled.div`
  padding-left: 1rem;
  border-left: 1px solid #eaecf0;
`;
