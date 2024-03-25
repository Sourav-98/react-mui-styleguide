import React from 'react';
import { FormInputFieldProps } from './FormInputField';
import { useField } from 'formik';
import InputField from '../InputField';

const FormInputField: React.FC<FormInputFieldProps> = ({name, helperText, ...formInputFieldProps}: FormInputFieldProps) : JSX.Element => {

  const [field, meta] = useField(name);

  return (
    <InputField
      {...formInputFieldProps}
      {...field}
      helperText={meta.touched && !!meta.error ? meta.error : null}
      error={meta.touched && !!meta.error}
    />
  )
}

export default FormInputField;
