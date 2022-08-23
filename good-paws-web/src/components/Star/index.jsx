import React from 'react'
import { IoStar } from 'react-icons/io5'
import Wrapper from './styles'

const Star = ({ cant }) => {
  return (
    <Wrapper>
      {[...Array(cant)].map((star, index) => {
        return (
          <label key={index}>
            <input type='radio' name='rating' />
            <IoStar
              className='star-icon'
              color='#FAC847
'
            />
          </label>
        )
      })}
      {[...Array(5 - cant)].map((star, index) => {
        return (
          <label key={index}>
            <input type='radio' name='rating' />
            <IoStar className='star-icon' color='#e4e5e9' />
          </label>
        )
      })}
    </Wrapper>
  )
}
export default Star
