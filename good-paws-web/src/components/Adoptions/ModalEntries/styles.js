import styled from 'styled-components';


export const TitleModal = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.75rem;
  color: #050505;
`;

export const SubTitleModal = styled.h3`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
`;

export const FormEntry = styled.form`
  color: #3c3f41;
`;

export const GridEntry = styled.div`
  display: grid;
`;

export const GridEntryItem1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:1.25rem;
  gap: 1.25rem;
`;
export const GridEntryItem2 = styled.div`
    margin-bottom: 2rem;
`;
export const GridEntryItem3 = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LabelEntry = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin-bottom: 0.375rem;
`;

export const InputEntry = styled.input`
  border: 1px solid #c3c6c8;
  border-radius: 0.5rem;
  padding: 0.625rem 0.875rem;
  height: 44px;
  width: 100%;

  &::placeholder{
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #3C3F41;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const TextAreaEntry = styled.textarea`
  border: 1px solid #C3C6C8;
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.625rem 0.875rem;
  height: 9.625rem;

  &::placeholder{
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #3C3F41;
  }
`;

export const ButtonCancel = styled.button`
  width: 100%;
  height: 2.25rem;
  color: #144353;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.5rem 0.875rem;
  border-radius: 0.5rem;
  transition: 300ms ease-out;

  &:hover {
    background-color: #57888726;
  }
  &:active {
    box-shadow: 0px 1px 2px rgba(87, 136, 135, 0.15),
      0px 0px 0px 4px rgba(87, 136, 135, 0.15);
    transition: 300ms ease-out;
    background-color: #ffffff;
  }
`;

export const ButtonSend = styled.button`
  width: 100%;
  height: 2.25rem;
  color: #ffffff;
  background-color: #144353;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.5rem 0.875rem;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  transition: 300ms ease-out;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
      0px 0px 0px 4px rgba(68, 160, 155, 0.2);
    transition: 300ms ease-out;
  }
`;
