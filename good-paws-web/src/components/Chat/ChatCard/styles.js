import styled from 'styled-components';

export const CardGrid = styled.div`
  height: 4.5rem;
  width: 100%;
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: space-around;
  border-bottom: 1px solid #eaecf0;
  cursor: pointer;
`;

export const CardGridItem = styled.div`
  height: 100%;
`;

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 12.5rem;
  overflow: hidden;
  border: 2px solid #578887;
`;

export const ImgAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.h3`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #3c3f41;
  font-weight: 500;
`;
