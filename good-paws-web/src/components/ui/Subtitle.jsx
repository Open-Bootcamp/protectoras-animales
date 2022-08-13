import styled from "styled-components";

export const Subtitle = styled.text`
    width: 600px;
    height: 60px; 
    color: var(--gray_500);
    font-weight: ${props => props.weigth};
    font-size: ${props => props.size};
    line-height: ${props => props.height};
    padding-top: ${props => props.pt};
    /* margin-top: ${props => props.mt}; */

  @media (min-width: 600px){

  };

;
  `