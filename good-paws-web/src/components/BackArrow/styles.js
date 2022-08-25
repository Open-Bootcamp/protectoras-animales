import styled from 'styled-components';

export const BackArrowButton = styled.a`
  color: #3c3f41;
  border: 1px solid #c3c6c8;
  border-radius: 0.5rem;
  width: 10.375rem;
  height: 2.5rem;
  padding: 0.875rem 0.5rem;
  margin-bottom: 1.208rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  gap: 0.5rem;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  cursor: pointer;
  transition: 300ms ease-out;
  &:hover {
    background-color: #f3f3f3;
    transition: 300ms ease-out;
  }
  &:active {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f2f4f7;
    transition: 300ms ease-out;
    background-color: #ffffff;
  }
`;
