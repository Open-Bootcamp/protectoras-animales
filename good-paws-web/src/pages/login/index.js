import React, { useState } from 'react'
import Input from '../../components/Input'
import MainContainer from './styles'
import * as Yup from 'yup'
import styled from 'styled-components'
import { Form, Formik } from 'formik'
import Link from 'next/link'

const initialState = {
  email: '',
  password: '',
  toggle: false,
}

const index = () => {
  const [values, setValues] = useState(initialState)

  const { email, password, toggle } = values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const formValidation = Yup.object({
    email: Yup.string()
      .required('El correo es requerido')
      .email('Ingrese un email valido'),
    password: Yup.string()
      .required('La contraseña es requerido')
      .min(6, 'La contraseña debe contener 6 caracteres como minimo')
      .max(36, "La contraseña debe contener 6 caracteres como máximo'"),
  })

  return (
    <MainContainer>
      <div className='section-form'>
        <Formik
          enableReinitialize
          initialValues={{
            email,
            password,
            toggle,
          }}
          validationSchema={formValidation}
          onSubmit={() => {}}
        >
          {(formik) => (
            <Form className='form-container'>
              <h3>Iniciar Sesión</h3>
              <Input
                name='email'
                placeholder='hola@open-devs.com'
                labelText='Email'
                onChange={handleChange}
              />
              <Input
                name='password'
                placeholder='********'
                labelText='Contraseña'
                onChange={handleChange}
              />

              <div className='recording'>
                <div>
                  <input
                    type='checkbox'
                    name='toggle'
                    onClick={() => setValues({ ...values, toggle: !toggle })}
                  />
                  Recordarme
                </div>

                <p>Olvide mi contraseña</p>
              </div>
              <button type='submit' className='btn '>
                Iniciar Sesion
              </button>
              <Link href='/register'>
                <div className='text-center'>Registrarme</div>
              </Link>
            </Form>
          )}
        </Formik>

        <div className='img-container'>
          <img src='./ilustracion.svg' alt='' />
        </div>
      </div>
    </MainContainer>
  )
}

export default index
