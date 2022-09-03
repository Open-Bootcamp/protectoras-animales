import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  min-width: 81.25rem;
  @media screen and (max-width: 1024px) {
    min-width: 1rem;
    grid-template-columns: 1fr;
  }
`;

export const GridItem1 = styled.div``;
export const GridItem2 = styled.div``;
