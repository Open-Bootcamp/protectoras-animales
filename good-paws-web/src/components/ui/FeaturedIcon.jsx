import styled from 'styled-components'


export const FeatureIcon = styled.div`

  background-image: url(${props => props.icon}.svg);
  background-repeat: no-repeat;
  background-position: center;

  display: inline-block;
  width: 68px;
  height: 68px;  
  background-color: var(--accent_pastel);
  border-radius: 100px;
  background-size: 60%;

`



