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

export const MessageFile = styled.div`
  display: flex;
  gap: 1rem;
  border: 1px solid #e1e2e3;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  padding: 0.625rem 0.875rem;
  border-radius: 0 0.5rem 0.5rem;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #57888726;
  width: 2rem;
  height: 2rem;
  border-radius: 1.75rem;
  position: relative;

  &::before {
    content: '';
    border: 2px solid rgba(87, 136, 135, 0.15);
    position: absolute;
    background-color: transparent;
    z-index: 10000;
    width: 90%;
    height: 90%;
    border-radius: 1.75rem;
  }
`;

export const IconFile = styled.img`
  width: 0.625rem;
`;

export const TextFile = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: #3c3f41;
`;

export const TitleFile = styled.p``;

export const SizeFile = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #697172;
`;
