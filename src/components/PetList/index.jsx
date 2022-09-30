import React from 'react'
import PetCard from '../PetCard'
import Wrapper from './style'
const PetList = () => {
  return (
    <div className='mq-flex'>
      <Wrapper>
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </Wrapper>
    </div>
  )
}

export default PetList
