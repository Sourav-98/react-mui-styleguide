import { FormInputFieldProps } from 'Elements/Input/FormInputField/FormInputField';
import { XDatePickerProps } from '../XDatePicker/XDatePicker';

export type FormXDatePickerProps = Omit<FormInputFieldProps, 'onChange' | 'value'> &
  Partial<Pick<XDatePickerProps, 'popperPlacement' | 'defaultToday' | 'datePickerActions' | 'onChange'>> & {
    /**
     * The date value in `string` or `Moment` to be set for the date picker component. 
     */
    value?: string;
  };
