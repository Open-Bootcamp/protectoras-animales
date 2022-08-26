import styled from 'styled-components'

export const Title = styled.h1`
  font-style: normal;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  line-height: 44px;

  color: var(--gray_900);

  text-align: ${props => props.aling};
  margin: ${props => props.my} ${props => props.mx};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};

  padding: ${props => props.p};
  letter-spacing: -0.02em;

  ${props => {
    if (!props.aling) {
      ;`@media (min-width: 600px){
      text-align: center;
    }`
    }
  }}
`
