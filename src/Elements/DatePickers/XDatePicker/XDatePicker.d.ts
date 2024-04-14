import { Moment } from 'moment';
import { InputFieldProps } from 'Elements/Input/InputField/InputField';

/**
 * @note `XDatePickerProps` omits the `value` and `onChange` of `InputFieldProps` to define its own type of value and onChange handler
 */
export type XDatePickerProps = Omit<InputFieldProps, 'value' | 'onChange'> & {
  /**
   * specifies the placement of the date picker's `Popper` component. Default value is `bottom-end`
   */
  popperPlacement?: PopperPlacementType;
  /**
   * the initial value to be set for the date picker, in the DDMMMYY string format
   */
  value?: string | number | Moment | null;
  /**
   * to denote whether the date picker should pick today's date as the initial value (if `value` is not given). If not set, default value will be `null`
   */
  defaultToday?: boolean;
  /**
   * The date change callback handler will pass the current date (of type `Moment` or `null`) selection information to the parent component
   */
  onChange?: (date: Moment | null | undefined) => void;
  /**
   * The date textfield `onBlur` override. (typically Formik's `setFieldTouched` should be invoked in this usage)
   */
  onBlur?: () => void;
  /**
   * optional date picker action overrides
   */
  datePickerActions?: Array<'clear' | 'cancel' | 'accept' | 'today'>;
  /**
   * 
   */
  datePickerMinDate?: Moment
  datePickerMaxDate?: Moment
};
