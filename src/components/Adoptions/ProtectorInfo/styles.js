import styled from 'styled-components';


export const Container = styled.div`
     margin-top: 1.5rem;
     @media screen and (max-width: 1024px) {
        padding-top: 1.375rem;
    border-top: 1px solid #C3C6C8;
  }
`;

export const Title = styled.h2`
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.3613rem;
    text-align: justify;
    margin-bottom: 0.75rem;
`;

export const ButtonChat = styled.button`
    background-color: #144353;
    width: 100%;
    color: #ffffff;
    padding: 0.5rem 0.875rem;
    border-radius: 0.5rem;
    margin-top: 0.75rem;
`;

export const ContainerFiles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.75rem;
`;
