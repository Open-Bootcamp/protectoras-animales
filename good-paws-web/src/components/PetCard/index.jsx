import React from 'react'
import Wrapper from '../PetList/style'
import { IoLocationOutline } from 'react-icons/io5'
const PetCard = () => {
  return (
    <div className='petCard'>
      <div className='img-container'>
        <img src='../pet.png' alt='' className='image-pet' />
      </div>
      <div className='info'>
        <h2 className='name-pet'>Sandwich</h2>

        <div className='tags'>
          <span>Macho</span>
          <span>1-2 años</span>
        </div>

        <div className='footer-pet'>
          <p>Amigos de los gatos </p>
          <div className='location'>
            <div className='icon'>
              <IoLocationOutline />
            </div>
            Valencia
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetCard
