import styled from 'styled-components';

export const MessageGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Message = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const MessageGridItem = styled.div`
  position: relative;
`;

export const MessageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.375rem;
`;

export const Author = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: #3c3f41;
`;

export const Date = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: #697172;
`;

export const MessageText = styled.p`
  max-width: 19.25rem;
  background-color: #578887;
  padding: 0.625rem 0.875rem;
  border-radius: 8px 0px 8px 8px;
  color: #ffffff;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
`;
