import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PetPictureView = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Picture = styled.div`
  height: 39.897rem;
  width: 100%;
  min-width: 29.5625rem;
  border-radius: 1.208rem;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    max-width: 29.5625rem;
    min-width: 18.75rem;
    height: 31.3125rem;
  }
`;

export const SliderPicturePets = styled.div`
  width: 100%;
  height: 9.688rem;
  display: flex;
  justify-content: center;
  gap: 0.83rem;
  margin-top: 1.208rem;

  @media screen and (max-width: 473px) {
    overflow-x: scroll;
    justify-content: flex-start;
  }
`;

export const PetPictureItem = styled.img`
  border-radius: 0.836rem;
  width: 6.7681rem;
  object-fit: cover;
  cursor: pointer;
`;
