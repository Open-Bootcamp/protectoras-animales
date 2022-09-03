import styled from 'styled-components';

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