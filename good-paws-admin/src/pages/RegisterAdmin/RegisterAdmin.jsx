import React from 'react'
import { useState } from 'react'
import TwoPasesVerification from '../../components/TwoPasesVerfication'
import Wrapper from './styles'
import * as Yup from 'yup'
import { Form, Formik, useField } from 'formik'
import Input from '../../components/Input'
const RegisterAdmin = () => {
  const [pase, setPase] = useState(true)

  return (
    <Wrapper>
      <div className='image-container'>
        <img src='./Logo.svg' alt='' />
      </div>
      {pase ? (
        <RegisterOne setPase={setPase} pase={pase} />
      ) : (
        <RegisterTwo setPase={setPase} pase={pase} />
      )}
    </Wrapper>
  )
}

const RegisterOne = ({ pase, setPase }) => {
  const initialState = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    term: false,
  }
  const [formOne, setFormOne] = useState(initialState)

  const { name, lastname, email, password, confirmPassword, term } = formOne

  const handleChange = (e) => {
    setFormOne({ ...formOne, [e.target.name]: e.target.value })
  }

  const onChange = () => {
    setFormOne({ ...formOne, term: !term })
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
    confirmPassword: Yup.string()

      .when('password', {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          'Las contraseñas deben ser iguales'
        ),
      })
      .required('you must confirm the password'),
    term: Yup.boolean().oneOf(
      [true],
      'Se debe aceptar las politicas de privacidad'
    ),
  })
  return (
    <div>
      <TwoPasesVerification pase={pase} setPase={setPase} />
      <h2>¡Bienvenid@! Necesitamos algunos datos de contacto</h2>

      <Formik
        enableReinitialize
        initialValues={{
          name,
          lastname,
          email,
          password,
          confirmPassword,
          term,
        }}
        validationSchema={formValidation}
        onSubmit={() => {
          setPase(false)
        }}
      >
        {(formik) => (
          <Form className='form-container' onSubmit={formik.handleSubmit}>
            <Input
              name='name'
              placeholder='Marta'
              labelText='Nombre'
              onChange={handleChange}
            />
            <Input
              name='lastname'
              placeholder='Gomez Lopez'
              labelText='Apellidos'
              onChange={handleChange}
            />
            <Input
              name='email'
              placeholder='hola@open-devs.com'
              labelText='Email'
              onChange={handleChange}
            />
            <Input
              type='password'
              name='password'
              placeholder='********'
              labelText='Contraseña'
              onChange={handleChange}
            />
            <Input
              type='password'
              name='confirmPassword'
              placeholder='********'
              labelText='Confirmar contraseña'
              onChange={handleChange}
            />

            <div className='recording'>
              <div>
                <Input
                  type='checkbox'
                  name='toggle'
                  onChange={onChange}
                  checkbox
                  labelText='Acepto la politica de privacidad'
                />
              </div>
            </div>
            <button type='submit' className='btn '>
              Button CTA
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const RegisterTwo = ({ pase, setPase }) => {
  const initialState = {
    name: '',
    country: '',
    comunity: '',
    address: '',
    tel: '',
  }
  const [formOne, setFormOne] = useState(initialState)

  const { name, country, comunity, address, tel } = formOne

  const handleChange = (e) => {
    setFormOne({ ...formOne, [e.target.name]: e.target.value })
  }

  const formValidation = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    country: Yup.string()
      .required('El pais es requerido')
      .min(1, 'La contraseña debe contener 6 caracteres como minimo'),
    comunity: Yup.string().required('El estado es requerido'),
    address: Yup.string().required('La direccion es requerido'),
    tel: Yup.number().required('El telefono el requerido'),
  })

  return (
    <div>
      <TwoPasesVerification pase={pase} setPase={setPase} />
      <h2>¡Cuentanos un poco más sobre tu protectora!</h2>
      <Formik
        enableReinitialize
        initialValues={{
          name,
          country,
          comunity,
          address,
          tel,
        }}
        validationSchema={formValidation}
        onSubmit={() => {
          setPase(false)
        }}
      >
        {(formik) => (
          <Form className='form-container' onSubmit={formik.handleSubmit}>
            <Input
              name='name'
              placeholder='Amigos de los gatos'
              labelText='Nombre de la protectora'
              onChange={handleChange}
            />

            <Input
              name='country'
              select
              labelText='Pais'
              onChange={handleChange}
              placeholder='Seleccion una opcion'
            >
              <option>Seleciona una opción</option>
              <option value='designer'>Designer</option>
              <option value='development'>Developer</option>
              <option value='product'>Product Manager</option>
              <option value='other'>Other</option>
            </Input>

            <Input
              name='comunity'
              select
              labelText='Comunidad/Estado'
              onChange={handleChange}
              placeholder='Seleccion una opcion'
            >
              <option value=''>Seleciona una opción</option>
              <option value='designer'>Designer</option>
              <option value='development'>Developer</option>
              <option value='product'>Product Manager</option>
              <option value='other'>Other</option>
            </Input>

            <Input
              name='address'
              placeholder='Calle falsa 123'
              labelText='Direccion'
              onChange={handleChange}
            />
            <Input
              name='tel'
              placeholder='+34 656 565 566'
              labelText='tel'
              onChange={handleChange}
            />

            <button type='submit' className='btn '>
              Button CTA
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default RegisterAdmin
