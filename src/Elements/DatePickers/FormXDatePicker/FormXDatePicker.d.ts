import { FormInputFieldProps } from 'Elements/Input/FormInputField/FormInputField';
import { XDatePickerProps } from '../XDatePicker/XDatePicker';

export type FormXDatePickerProps = Omit<FormInputFieldProps, 'onChange' | 'value'> & XDatePickerProps;
