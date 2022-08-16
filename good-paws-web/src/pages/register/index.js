import React, { useState } from 'react'
import Input from '../../components/Input'
import MainContainer from '../login/styles'
import * as Yup from 'yup'

import styled from 'styled-components'
import { Form, Formik, Field } from 'formik'

const initialState = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const index = () => {
  const [values, setValues] = useState(initialState)

  const { name, lastname, email, password, confirmPassword } = values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const formValidation = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    lastname: Yup.string().required('El apellido es requerido'),
    email: Yup.string()
      .required('El correo es requerido')
      .email('Ingrese un email valido'),
    password: Yup.string()
      .required('La contraseña es requerido')
      .min(6, 'La contraseña debe contener 6 caracteres como minimo')
      .max(36, "La contraseña debe contener 6 caracteres como máximo'"),
  })

  return (
    // HEADER

    <MainContainer>
      <div className='section-form'>
        <Formik
          enableReinitialize
          initialValues={{
            name,
            lastname,
            email,
            password,
            confirmPassword,
          }}
          validationSchema={formValidation}
          onSubmit={() => {}}
        >
          {(formik) => (
            <Form className='form-container'>
              <div className='header-form'>
                <h3>Registrate</h3>
                <span className='subt'>Y encuentra a tu nuevo mejor amigo</span>
              </div>
              <Input
                name='name'
                placeholder='Jhon'
                labelText='Nombre'
                onChange={handleChange}
              />
              <Input
                name='lastname'
                placeholder='Garcia'
                onChange={handleChange}
                labelText='Apellidos'
              />
              <Input
                name='email'
                placeholder='hola@open-devs.com'
                labelText='Email'
                onChange={handleChange}
              />
              <Input
                type='password'
                placeholder='********'
                name='password'
                labelText='Contraseña'
                onChange={handleChange}
              />
              <Input
                type='password'
                placeholder='********'
                name='confirmPassword'
                labelText='Confirma tu contraseña'
                onChange={handleChange}
              />

              <div className='recording'>
                <div>
                  <p>
                    <input type='checkbox' name='recordar' /> Acepto la politica
                    de privacidad
                  </p>
                </div>
              </div>
              <button type='submit' className='btn '>
                Iniciar Sesion
              </button>
              <div className='text-center'>
                ¿Ya tienes una cuenta? Inciar sesión
              </div>
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
