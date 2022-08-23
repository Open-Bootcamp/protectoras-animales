import React from 'react'
import { useField, ErrorMessage } from 'formik'

import Wrapper from './styles.js'
const index = ({ placeholder, labelText, checkbox, textarea, ...props }) => {
  const [field, meta] = useField(props)

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
        <>
          <label>{labelText || field.name}</label>

          <input
            type={field.type}
            className='form-input'
            name={field.name}
            placeholder={placeholder}
            {...field}
            {...props}
          />
        </>
      )}

      <div className='error-message'>
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
      </div>
    </Wrapper>
  )
}

export default index
