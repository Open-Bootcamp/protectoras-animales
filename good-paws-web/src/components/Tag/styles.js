import styled from 'styled-components';

export const ContainerTag = styled.span`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: 0.125rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
`;
