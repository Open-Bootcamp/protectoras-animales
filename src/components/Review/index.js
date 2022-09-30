import React from 'react'
import Star from '../Star'
import Wrapper from './style'
const Review = () => {
  return (
    <Wrapper>
      <div className='review-header'>
        <p className='name'>Alfredo Martinez</p>

        <Star cant={4} />
      </div>

      <div>
        <p>
          Adopté a mi conejo Ron con Amigos de los gatos. El proceso muy
          sencillo, son muy amables y sólo me han puesto facilidades.
        </p>
      </div>
    </Wrapper>
  )
}

export default Review
