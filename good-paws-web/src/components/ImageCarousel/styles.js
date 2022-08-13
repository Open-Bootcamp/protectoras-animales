import styled from 'styled-components';


export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;  
`;

export const ImageContainer = styled.div`
    transition: opacity ease-in-out 0.4s;
    opacity: ${props => props.opacity};  
`;

export const InfoContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    background: ${props => props.background 
                        ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.308) -3.63%, rgba(0, 0, 0, 0.7) 100%)' 
                        : 'none'};

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: flex-end;
    }  
`;

export const ImageInfo = styled.div`
    margin: 0 5rem 4.5rem 0;
    width: 403px; 

    @media screen and (max-width: 768px) {
        width: 236px;
        margin:  0 3.5rem 3.5rem 3.5rem;
    }
`;
export const Title = styled.h2`
    color: #FFFFFF;
    font-size: 2.5rem;
    margin: 0;
    font-weight: 500;
    text-transform: capitalize;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const Description = styled.p`
    color: #E1E2E3;
    font-size: 1.469rem; 
    font-weight: 400;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;