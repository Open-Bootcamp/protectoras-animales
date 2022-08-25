import styled from 'styled-components';

export const Container = styled.div``;

export const NamePet = styled.h1`
  text-transform: capitalize;
  font-size: 4rem;
  font-weight: 600;
  line-height: 4.8406rem;
  @media screen and (max-width: 1024px) {
    font-size: 2.25rem;
    line-height: 2.7231rem;
    margin-bottom: 0.5rem;
  }
`;

export const ContainerTags = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  gap: 0.473rem;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`;

export const TextDescription = styled.p`
  color: #484848;
  font-size: 0.875rem;
  text-align: justify;
  font-weight: 400;
  line-height: 1.059rem;
  margin-bottom: 1rem;
`;

export const DescriptionPet = styled.div`
  margin-bottom: 1.25rem;
`;

export const Observations = styled.div`
  border-top: 1px solid #cfcfcf;
  border-bottom: 1px solid #cfcfcf;
  padding: 1.25rem 0;
`;

export const MedicalData = styled.div`
  padding: 1.25rem 0;
`;

export const TextUl = styled.ul`
  margin-left: 1.4rem;
`;

export const TextLi = styled.li`
  line-height: 1.063rem;
  color: #484848;
  font-size: 0.875rem;
  font-weight: 400;
`;
