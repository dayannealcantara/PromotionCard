import React from "react";
import { useField } from "formik";
import './field.css'

const FormField = ({ name, id, label, ...restProps}) =>{
  const [field, meta] = useField({ name, id, ...restProps});
  return (
    <>
      {label && (
        <label htmlFor={id ?? name} className="formFieldLabel">
          {label}
        </label>
      )}
      <input
       {...field}
        name={name}
        id={id ?? name}
        className={`formFieldInput  ${meta.error && 'formFieldInputError'}`}
      />
      {meta.error && (
        <span className="formFieldError">{meta.error}</span>
      )}
     
    </>
  )
}

export default FormField