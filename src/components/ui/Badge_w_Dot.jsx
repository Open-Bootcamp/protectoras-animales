import React from 'react'
import styled from 'styled-components'

const Badge = styled.div`

  width: fit-content;
  height: 22px;
  border-radius: 16px;
  align-items: center;
  padding: 2px 10px 2px 0px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: var(--${props => props.textColor});

  background: var(--${props => props.color});

`

const Badge_dot = styled.div`
  height: 4px;
  width: 4px;
  background-color: var(--${props => props.color});
  border-radius: 50%;
  display: inline-block;
  margin: 0px 6px;
`

export const Badge_w_Dot = ({label = 'Ingrese su label', bgcolor = 'grey_5', textColor = 'grey_1'}) => {
  return (
    <Badge color={bgcolor} textColor={textColor}>
      <Badge_dot color={textColor}/>
      {label}
    </Badge>
  )
}
