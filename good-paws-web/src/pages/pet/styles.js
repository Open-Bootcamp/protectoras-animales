import styled from 'styled-components'

const Grid = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 36px 38px;
  display: grid;
  gap: 1.375rem;
  grid-template-columns: 1fr 1.2fr 0.8fr;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0px 10px;
    gap: 0;
    margin-top: 0.625rem;
  }
`

export const GridItem1 = styled.div``
export const GridItem2 = styled.div``
export const GridItem3 = styled.div`
  border-left: 1px solid #d9d9d9;
  padding-left: 1.375rem;
  @media screen and (max-width: 1024px) {
    padding-left: 0;
    border: none;
  }
`

export default Grid
