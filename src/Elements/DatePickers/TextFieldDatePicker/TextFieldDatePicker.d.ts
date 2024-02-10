import { DatePickerProps } from '@mui/x-date-pickers';
import { Moment } from 'moment';

export interface TextFieldDatePickerProps extends Partial<Omit<TextFieldProps, 'value'>> {
  /**
   * the text format of date to be used by the typable date picker. Default value is `DDMMMYY`
   */
  dateFormat?:
    | 'DD-MM-YYYY'
    | 'MM-DD-YYYY'
    | 'YYYY-MM-DD'
    | 'DD/MM/YYYY'
    | 'MM/DD/YYYY'
    | 'DD/MM/YY'
    | 'MM/DD/YY'
    | 'DDMMMYY';
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
   * The date textfield `onBlur` override
   */
  onBlur?: () => void;
  /**
   * optional date picker action overrides
   */
  datePickerActions?: Array<'clear' | 'cancel' | 'accept' | 'today'>;
}
