import { useState } from 'react';
import { Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { MedicalEntry } from '../MedicalEntry';
import { ModalEntries } from '../ModalEntries';
import {
  Button,
  Container,
  MedicalEntries,
  MedicalHeader,
  MedicalInfo,
  Text,
  Title
} from './styles';

export const MedicalHistory = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [entries, setEntries] = useState([
    {
      id: 3123,
      title: 'Operación de cadera',
      clinic: 'Clinica Duff',
      observations: 'Realizada debido a una lesión que tenía cuando fue rescatado.',
      dateEntry: new Date(),
    }
  ]);

  const enterMedicalEntries = (values) => {

    setEntries([
      ...entries,
      values
    ])
  }

  return (
    <>
      <Container>
        <MedicalInfo>
          <MedicalHeader>
            <Title>Historial médico y citas veterinarias</Title>
            <Button onClick={onOpen}>Nueva entrada</Button>
          </MedicalHeader>
          <Text>Aquí podrás visualizar las intervenciones médicas que le han sido realizadas a tu mascota, así como añadir aquellas que consideres importantes para la protectora</Text>
        </MedicalInfo>

        <MedicalEntries>
          {
            entries.map((entry) => (<MedicalEntry entry={entry} />))
          }



        </MedicalEntries>
      </Container>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay
          bg='rgba(0, 0, 0, 0.25)'
          backdropFilter='blur(25px) '
        />
        <ModalEntries onClose={onClose} enterMedicalEntries={enterMedicalEntries} />
      </Modal>
    </>
  )
}
