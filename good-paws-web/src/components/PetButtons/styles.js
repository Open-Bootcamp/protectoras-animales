import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.7087rem 0;
  @media screen and (max-width: 1024px) {
    margin: 1.5rem 0;
  }
`;

export const DarkButton = styled.button`
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

export const LightButton = styled.button`
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

export const ButtonsModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`;

export const TitleModal = styled.h2`
  font-family: 'Inter';
  color: #050505;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
`;

export const TextModal = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin-bottom: 2rem;
`;
