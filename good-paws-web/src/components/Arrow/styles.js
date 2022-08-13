import styled from 'styled-components';


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
