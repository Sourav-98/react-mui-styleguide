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
      helperText={helperText || ' '}
      error={meta.touched && !!meta.error}
    />
  )
}

export default FormInputField;
