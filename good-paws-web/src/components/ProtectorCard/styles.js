import styled from 'styled-components';

export const Card = styled.div`
  padding: 0.75rem 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.735rem;
  border-bottom: 1px solid #e1e2e3;
  @media screen and (max-width: 1024px) {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5513rem;
`;

export const CardBlock1 = styled.div``;
export const CardBlock2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPhoto = styled.div`
  background-image: url(/img-1.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 3.3087rem;
  height: 3.3087rem;
  border-radius: 9.1912rem;
  border: 2.94118px solid #ffffff;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
`;

export const CardTitle = styled.h2`
  font-size: 1.103rem;
  font-weight: 500;
  line-height: 1.335rem;
`;

export const CardSubTitle = styled.h4`
  font-size: 0.735rem;
  font-weight: 500;
  line-height: 0.89rem;
  color: #484848;
`;

export const CardLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3794rem;
  font-size: 0.735rem;
  font-weight: 400;
  line-height: 0.89rem;
  color: #484848;
`;
