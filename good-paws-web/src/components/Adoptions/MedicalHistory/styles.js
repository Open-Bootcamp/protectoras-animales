import styled from 'styled-components';

export const Container = styled.div``;

export const MedicalInfo = styled.div``;

export const MedicalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  text-align: justify;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 1.375rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.375rem;
  text-align: justify;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: #697172;
  @media screen and (max-width: 1024px) {
    margin-top: 1.0625rem;
  }
`;

export const Button = styled.button`
  width: 7.875rem;
  height: 1.375rem;
  border-radius: 0.5rem;
  color: #144353;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;

  &:hover {
    background-color: #57888726;
  }
  &:active {
    box-shadow: 0px 1px 2px rgba(87, 136, 135, 0.15),
      0px 0px 0px 4px rgba(87, 136, 135, 0.15);
    transition: 300ms ease-out;
    background-color: #ffffff;
  }

  @media screen and (max-width: 1024px) {
    align-self: flex-end;
  }
`;

export const MedicalEntries = styled.div`
  margin-top: 2.0625rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
