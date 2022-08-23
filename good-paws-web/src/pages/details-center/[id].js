import React, { useState } from 'react'
import MainContainer from './styles'
import ModalWrapper from './ModalStyle'
import * as Yup from 'yup'
import Input from '../../components/Input'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'

import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from 'react-icons/io5'
import Review from '../../components/Review'
import PetList from '../../components/PetList'

const DetailsCenter = () => {
  const [message, setMessage] = useState('')

  const [review, setReview] = useState(false)
  const [user, setUser] = useState(true)
  const [send, setSend] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const formValidation = Yup.object({
    message: Yup.string().required('El mensaje es requerido'),
  })

  const onChange = (e) => {
    setMessage(e.target.value)
    console.log(message)
  }
  return (
    <MainContainer>
      <header className='header'>
        <div className='header-left'>
          <div className='container'>
            <h2>OR</h2>
          </div>
        </div>
        <div className='header-center'>
          <h1>Amigos de los gatos</h1>
          <p>Valencia</p>
        </div>
        <div className='header-right'>
          <button className='text-right' onClick={onOpen}>
            Enviar Mensaje
          </button>

          <p onClick={() => setReview(!review)}>
            {review
              ? 'Ver animales en adopción'
              : 'Ver reseñas de la protectora'}
          </p>
        </div>
      </header>

      <main>
        <div className='main-content'>
          <div>
            <h3>Sobre Amigos de los gatos:</h3>
            <p className='description'>
              Somos una asociación sin ánimo de lucro, compuesta por voluntarios
              y voluntarias que prestan su tiempo de forma desinterasada, con el
              único objetivo de hacer que las vidas de estos animales rescatados
              sean lo más agradables y saludables posibles, hasta que encuentren
              su hogar.
            </p>
          </div>
          <div className='contacto'>
            <h3>Datos de contacto</h3>
            <ul>
              <li>
                <IoMailOutline />
                <span>Email:</span>
                amigos@delosgatos.com
              </li>

              <li>
                <IoCallOutline />
                <span> Teléfono:</span>
                +34 644 454 545
              </li>
              <li>
                <IoLocationOutline />
                <span> Dirección:</span> Calle Falsa 123 , Valencia, España
              </li>
            </ul>
          </div>
          <div className='donaciones'>
            <h3>Donaciones</h3>

            <ul>
              <li>
                <span>paypal:</span>amigos de los gatos
              </li>
              <li>
                <span>Bizum:</span>ONG - 888
              </li>
              <li>
                <span>paypal:</span>ES88 8888 8888 8888
              </li>
            </ul>
          </div>
        </div>
        <div className='main-right'>
          {review ? (
            <div className='container-review'>
              <Review />
              <Review />
              <Review />
              <Review />
            </div>
          ) : (
            <>
              <PetList />

              <button className='btn-footer'>
                Ver todos los animales en adopción
              </button>
            </>
          )}
        </div>
      </main>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalWrapper>
            <ModalHeader>Enviar mensaje a Amigos de los gatos</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {user && !send && (
                <Formik
                  enableReinitialize
                  initialValues={{ message }}
                  validationSchema={formValidation}
                  onSubmit={() => {
                    console.log('hola')
                    setSend(true)
                    setMessage('')
                  }}
                >
                  {(formik) => (
                    <Form className='form-container'>
                      <Input
                        name='message'
                        placeholder='Escribe aquí..'
                        labelText='Mensaje'
                        onChange={onChange}
                        textarea
                      />

                      <div className='flex'>
                        <input
                          type='button'
                          value='cancelar'
                          className='btn-mod btn-alt'
                          onClick={() => {
                            onClose()
                          }}
                        />
                        <button type='submit' className='btn-mod'>
                          Enviar
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              )}

              {user && send && (
                <div>
                  <p>
                    Hemos enviado tu mensaje. Recibirás respuesta muy pronto.
                    ¡Muchas gracias!
                  </p>
                  <button className='btn-mod btn-fw' onClick={onOpen}>
                    Ir a la conversación
                  </button>
                  <button
                    className=' btn-mod btn-alt btn-fw'
                    type='submit'
                    onClick={() => {
                      onClose()
                      setSend(false)
                    }}
                  >
                    Cerrar
                  </button>
                </div>
              )}
              {!user && (
                <p>
                  Primero, necesitamos que inicies sesión para enviar tu mensaje
                </p>
              )}
            </ModalBody>

            <ModalFooter>
              {!user && (
                <div className='btn-fw'>
                  <button className='btn-mod btn-fw' onClick={onOpen}>
                    Iniciar sesión
                  </button>
                  <button
                    className=' btn-mod btn-alt btn-fw'
                    onClick={onOpen}
                    type='submit'
                  >
                    Registrarme
                  </button>
                </div>
              )}
            </ModalFooter>
          </ModalWrapper>
        </ModalContent>
      </Modal>
    </MainContainer>
  )
}

export default DetailsCenter
