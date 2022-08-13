import styled from "styled-components";



export const MenuButton = styled.button`


  display: flex;
  background-image: url(menu.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  border: 0px solid ;
  border-radius: 40%;
  background-color: white;

  :active{
    background-color: var(--primary_pastel);
  }

  width: 60px;
  height: 40px;

  @media(min-width: 600px){
    display: none
  }

`;