import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.513rem;
  margin-bottom: 0.709rem;
`;

export const InfoLi = styled.li`
  display: flex;
  gap: 0.75rem;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
