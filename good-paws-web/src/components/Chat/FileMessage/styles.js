import styled from 'styled-components';

export const MessageGrid = styled.div`
  width: 100%;
`;

export const Message = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
`;

export const MessageGridItem = styled.div`
  position: relative;
`;

export const Avatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  border-radius: 12.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 28px;
    right: 0;
    width: 0.625rem;
    height: 0.625rem;
    background-color: #a0da67;
    border: 1.5px solid #ffffff;
    border-radius: 0.3125rem;
  }
`;
export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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