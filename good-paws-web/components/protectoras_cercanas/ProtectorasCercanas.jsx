import React from 'react'
import { Subtitle, Title, Button } from '../ui'

export const ProtectorasCercanas = () => {
  return (
    <>

      <Title mt='48px' mx='0px' weight='600'>Encuentra protectoras cercanas</Title>
      <Subtitle
        weight='500'
        size='20px'
        height='30px'
      >
        Busca la protectora más cercana a ti,
        conoce sus animales, envía un mensaje
        ¡y encuentra a tu nuevo compañero de vida!
      </Subtitle>

      {/* <Badge_w_Dot label='22 protectoras'/> */}

      <br />
      <Button color='primary' size='sm' mt='16px'>Buscar Protectoras</Button>
  
    </>

  )
}
