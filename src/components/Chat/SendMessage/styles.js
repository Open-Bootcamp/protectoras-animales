import styled from 'styled-components';

export const Form = styled.form`
  height: 4.75rem;
  display: flex;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 1rem 0;
  }
`;

export const InputMessage = styled.input`
  width: 714px;
  border: 1px solid #d0d5dd;
  padding: 0.625rem 0.875rem;
  border-radius: 0.5rem;

  &::placeholder {
    font-size: 1rem;
    color: #667085;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InputFile = styled.input`
  border: 1px solid #c3c6c8;
  min-width: 2.5rem;
  max-width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-image: url(./icon-file-input.svg);
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  cursor: pointer;
  transition: 300ms ease-out;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &:hover {
    background-color: #f3f3f3;
    transition: 300ms ease-out;
  }

  &:active {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f2f4f7;
  }
`;

export const Button = styled.button`
  background-image: url(./icon-send.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-color: #144353;
  min-width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  transition: 300ms ease-out;

  &:hover {
    transition: 300ms ease-out;
    opacity: 0.8;
  }

  &:active {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
      0px 0px 0px 4px rgba(68, 160, 155, 0.2);
    transition: 300ms ease-out;
  }
`;
