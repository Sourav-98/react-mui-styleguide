import React from 'react';
import XDatePicker from '../XDatePicker';
import { useField, useFormikContext } from 'formik';
import { FormXDatePickerProps } from './FormXDatePicker';
import moment from 'moment';

/**
 * An `XDatePicker` HOC to be used inside of a `Formik` context.
 * @param param0 
 * @returns 
 */
const FormXDatePicker: React.FC<FormXDatePickerProps> = ({ value, ...formInputFieldProps }): JSX.Element => {
  const [_, meta] = useField(formInputFieldProps.name);
  const { setFieldValue, setFieldTouched } = useFormikContext<any>();

  return (
    <XDatePicker
      {...formInputFieldProps}
      value={value || _.value}
      onChange={(date) => {
        setTimeout(() => {
          setFieldValue(formInputFieldProps.name, date)
        }, 0);
        formInputFieldProps.onChange && formInputFieldProps.onChange(date); // event propagation
      }}
      onBlur={() => {
        setTimeout(() => {
          setFieldTouched(formInputFieldProps.name, true, true)
        }, 0);
        formInputFieldProps.onBlur && formInputFieldProps.onBlur(); // event propagation
      }}
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

export default FormXDatePicker;