import styled from "styled-components"

// import React from 'react'

//TODO: Agregar cosas como por ejemplo:
//? font-weight: var(${props => props.size}_weigth)

  export const Button = styled.button`
    color: var(--white);
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    /* gap: 8px; */

    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};

    cursor: pointer;
    color: var(--${props => props.fontColor});
    background-color: var(--${props => props.color});
    border: 1px solid && var(--${props => props.color}) ;
    border-radius: 8px;
    
    padding: var(--button_${props => props.size});
    /* width:  */
    width: ${props => props.width};
    /* height: 44px; */

    :hover{
      background-color: var(--${props => props.color}_ligth)
    }

    :active{
      background-color: var(--${props => props.color}_pastel)
    }
  `;


