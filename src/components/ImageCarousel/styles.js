import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

export const ImageContainer = styled.div`
  transition: opacity ease-in-out 0.4s;
  opacity: ${(props) => props.opacity};
  visibility: ${(props) => (props.opacity === 1 ? "visible" : "hidden")};
`;

export const InfoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: transparent;
  transition: 300ms ease-out;
  &:hover {
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.308) -3.63%,
      rgba(0, 0, 0, 0.7) 100%
    );
    transition: 300ms ease-out;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: flex-end;
  }
`;

export const ImageInfo = styled.div`
  margin: 0 5rem 4.5rem 0;
  width: 25.188rem;
  visibility: hidden;
  transition: 300ms ease-out;

  ${InfoContainer}:hover & {
    visibility: visible;
    transition: 300ms ease-out;
  }

  @media screen and (max-width: 768px) {
    width: 20rem;
    margin: 0 3.5rem 3.5rem 3.5rem;
  }
  @media screen and (max-width: 320px) {
    width: 14.75rem;
    margin: 3rem 3rem 3rem;
  }
`;
export const Title = styled.h2`
  color: #ffffff;
  font-size: 2.5rem;
  margin: 0;
  font-weight: 500;
  line-height: 3rem;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.4375rem;
  }
`;

export const Description = styled.p`
  color: #e1e2e3;
  font-size: 1.469rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.81rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.1875rem;
  }
`;
