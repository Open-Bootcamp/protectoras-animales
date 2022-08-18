import styled from 'styled-components';

export const Container = styled.div`
text-align: center;
padding: 15px;

@media (max-width: 600px){
  padding: 0;
  height: auto;
  margin: 0px 12px;
  text-align: center;
};
`

export const Carousel = styled.div`
    max-width: 977px;
    min-width: 320px;
    height: 400px;
    overflow: hidden;
    position: relative; 
    border-radius: 8px;
    margin: 0 auto;
    text-align: justify;
`;

export const ButtonAction = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 22px;
    border: none;
    background-color: white;
    cursor: pointer;
    backdrop-filter: blur(8px);
`;
export const ArrowRight = styled(ButtonAction)` 
    right: 16px;
`;
export const ArrowLeft = styled(ButtonAction)`
    left: 16px;
`;
export const Dots = styled.div`
    position: absolute;
    bottom: 16px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;     
`;
export const DotsContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    padding: 0.5rem;
    border-radius: 12px;
    gap: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Dot = styled.button`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    border: none;
    padding: 0;
    background-color: ${props => props.active};
`;