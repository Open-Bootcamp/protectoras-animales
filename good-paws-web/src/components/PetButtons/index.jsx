import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Buttons, ButtonsModal, DarkButton, LightButton, TextModal, TitleModal } from './styles';


export const PetButtons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [template, setTemplate] = useState();
  const [isLogin, setIsLogin] = useState(false);


  const TemplateA = () => (
    <ModalContent boxSizing='' p='1.5rem' borderRadius='0.75rem'  >
      <ModalHeader p='0'>
        <TitleModal>¡Quiero adoptar a Pancho!</TitleModal>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody p='0'>
        <TextModal>
          {
            isLogin
              ? 'Hemos enviado tu solicitud para adoptar a Pancho. Pronto recibirás más información de la protectora. ¡Muchas gracias!'
              : '¡Pancho se pondrá muy content@! Pero primero, necesitamos que inicies sesión para enviar tu solicitud'
          }
        </TextModal>
      </ModalBody>

      <ModalFooter p='0'>
        <ButtonsModal>

          <DarkButton>{isLogin ? 'Ir a la solicitud' : 'Iniciar sesión'}</DarkButton>
          <LightButton>{isLogin ? 'Cerrar' : 'Registrarme'}</LightButton>
        </ButtonsModal>
      </ModalFooter>
    </ModalContent>
  )

  const TemplateB = () => (
    <ModalContent boxSizing='' p='1.5rem' borderRadius='0.75rem'  >
      <ModalHeader p='0'>
        <TitleModal>¡Quiero acoger a Pancho!</TitleModal>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody p='0'>
        <TextModal>
          {
            isLogin
              ? 'Hemos enviado tu solicitud para ser casa de acogida de Pancho. Pronto recibirás más información de la protectora. ¡Muchas gracias!'
              : '¡Pancho se pondrá muy content@! Pero primero, necesitamos que inicies sesión para enviar tu solicitud<'
          }
        </TextModal>
      </ModalBody>

      <ModalFooter p='0'>
        <ButtonsModal>
          <DarkButton>{isLogin ? 'Ir a la solicitud' : 'Iniciar sesión'}</DarkButton>
          <LightButton>{isLogin ? 'Cerrar' : 'Registrarme'}</LightButton>
        </ButtonsModal>
      </ModalFooter>
    </ModalContent>
  )


  return (

    <>
      <Buttons>
        <DarkButton onClick={() => {
          setTemplate(<TemplateA />),
            onOpen()
        }} >Quiero adoptar Pancho</DarkButton>
        <LightButton onClick={() => {
          setTemplate(<TemplateB />),
            onOpen()
        }} >Quiero ser casa de acogida</LightButton>
      </Buttons>

      <Modal isCentered isOpen={isOpen} onClose={onClose} >
        <ModalOverlay bg='rgba(0, 0, 0, 0.25)'
          backdropFilter='blur(25px) ' />
        {template}
      </Modal>
    </>
  )

}
