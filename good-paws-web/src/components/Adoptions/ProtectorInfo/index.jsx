import React from 'react'
import { File } from '../../File'
import { ProtectorCard } from '../../ProtectorCard'
import { ButtonChat, Container, ContainerFiles, Title } from './styles'

export const ProtectorInfo = () => {

  return (
    <Container>
        <Title>Protectora y documentos</Title>
        <ProtectorCard />
        <ButtonChat>Ir a la conversación</ButtonChat>
        <ContainerFiles>
            <File />
            <File />

        </ContainerFiles>
    </Container>
  )
}
