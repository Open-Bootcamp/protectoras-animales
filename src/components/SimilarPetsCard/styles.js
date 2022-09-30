import styled from 'styled-components';

export const Card = styled.div`
  width: 9.4519rem;
  height: 11.6919rem;
  overflow: hidden;
  border-radius: 0.75rem;
  position: relative;
  transition: 300ms ease-out;
  &:hover {
    transition: 300ms ease-out;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 320px) {
    width: 8.6rem;
    height: 10rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.p`
  position: absolute;
  bottom: 9.76px;
  left: 7.84px;
  background-color: #e18d83cc;
  border-radius: 0.4201rem;
  padding: 0.14rem 0.8402rem;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-weight: 600;
  line-height: 1.0169rem;
  font-size: 0.84rem;
`;
