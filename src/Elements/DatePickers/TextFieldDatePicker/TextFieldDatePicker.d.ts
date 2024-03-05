import { Moment } from 'moment';
import { InputFieldProps } from 'Elements/Input/InputField/InputField';

export type TextFieldDatePickerProps = Omit<InputFieldProps, 'value'> & {
  /**
   * specifies the placement of the date picker's `Popper` component. Default value is `bottom-end`
   */
  popperPlacement?: PopperPlacementType;
  /**
   * the initial value to be set for the date picker
   */
  value?: Moment | null | undefined;
  /**
   * to denote whether the date picker should pick today's date as the initial value (if `value` is not given). If not set, default value will be `null`
   */
  defaultToday?: boolean;
  /**
   * The date change callback handler will pass the current date (of type `Moment` or `null`) selection information to the parent component
   */
  onDateChange?: (date: Moment | null | undefined) => void;
  /**
   * The date textfield `onBlur` override. (typically Formik's `setFieldTouched` should be invoked in this usage)
   */
  onBlur?: () => void;
  /**
   * optional date picker action overrides
   */
  datePickerActions?: Array<'clear' | 'cancel' | 'accept' | 'today'>;
}
