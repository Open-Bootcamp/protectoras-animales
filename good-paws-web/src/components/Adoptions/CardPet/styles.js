import styled from 'styled-components';

export const Card = styled.div`
    
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 0.75rem;
    gap: 0.5rem;
    border-bottom: 1px solid #E1E2E3;
    cursor: pointer;
`;

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 12.5rem;
  overflow: hidden;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardInfo = styled.div``;

export const NamePet = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: #3C3F41;
`;

export const AdoptionDate = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: #697172;
`;
