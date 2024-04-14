import React from 'react';
import { FormInputFieldProps } from '../FormInputField/FormInputField';
import { useField } from 'formik';
import PasswordInputField from '../PasswordInputField';

/**
 * A `PasswordInputField` HOC to be used within the `Formik` context
 * @note  if `helperText` is set, the value will be respected.
 *        if `helperText` is assigned `null`, this means no helperText is to be shown after validation.
 *        else, show the field validation error message for the `helperText`
 */
const FormPasswordInputField: React.FC<FormInputFieldProps> = ({
  name,
  ...formInputFieldProps
}: FormInputFieldProps): JSX.Element => {
  const [field, meta] = useField(name);

  return (
    <PasswordInputField
      /**
       * @warning do not change the order of the `field` and `formInputFieldProps` destructuring
       */
      {...field}
      {...formInputFieldProps}
      name={name}
      error={meta.touched && !!meta.error}
      helperText={
        formInputFieldProps.helperText || formInputFieldProps.helperText === null
          ? formInputFieldProps.helperText
          : meta.touched && !!meta.error
          ? meta.error
          : null
      }
    />
  );
};

export default FormPasswordInputField;
