import React from 'react'
import { useField, ErrorMessage, Field } from 'formik'

import Wrapper from './styles.js'
const Input = ({
  placeholder,
  labelText,
  checkbox,
  textarea,
  select,
  children,
  ...props
}) => {
  const [field, meta] = useField(props)

  if (select) {
    return (
      <Wrapper>
        <div className='input-box'>
          <label>{labelText || field.name}</label>

          <select
            className='form-input'
            name={field.name}
            placeholder={placeholder}
            {...field}
            {...props}
          >
            {children}
          </select>
          <div className='error-message' style={{ textAlign: 'center' }}>
            {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          </div>
        </div>
      </Wrapper>
    )
  }

  if (textarea) {
    return (
      <Wrapper>
        <label>{labelText || field.name}</label>

        <textarea
          name={field.name}
          onClick={props.onChange}
          placeholder={placeholder}
          {...field}
          {...props}
        ></textarea>
        <div className='error-message'>
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {checkbox ? (
        <div className='checbox'>
          <input type='checkbox' name={field.name} onClick={props.onChange} />
          {labelText}
        </div>
      ) : (
        <div className='input-box'>
          <label>{labelText || field.name}</label>

          <input
            type={field.type}
            className='form-input'
            name={field.name}
            placeholder={placeholder}
            {...field}
            {...props}
          />
        </div>
      )}

      <div className='error-message'>
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
      </div>
    </Wrapper>
  )
}

export default Input
