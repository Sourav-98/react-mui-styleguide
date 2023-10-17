import React, { useState, useRef, MutableRefObject, useEffect, RefObject } from 'react';

import {
  IconButton,
  TextField,
  InputAdornment,
  TextFieldProps,
  PopperPlacementType,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DatePicker } from '@mui/x-date-pickers';
import moment, { Moment } from 'moment';


export const TextFieldDatePicker: React.FC< Partial<Omit<TextFieldProps, 'value'>> & {
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
  placement?: PopperPlacementType;
  /**
   * the initial value to be set for the date picker
   */
  value?: Moment | null;
  /**
   * to denote whether the date picker should pick today's date as the initial value (if `value` is not given). If not set, default value will be `null`
   */
  defaultToday?: boolean;
  /**
   * The date change callback handler will pass the current date (of type `Moment` or `null`) selection information to the parent component
   */
  onDateChange?: (date: Moment | null) => void;
  onBlur?: () => void;
}> = ({
  dateFormat = 'DDMMMYY',
  placement = 'bottom-end',
  value,
  defaultToday,
  onDateChange,
  onBlur,
  ...textFieldProps
}): JSX.Element => {
  const [date, setDate] = useState<Moment | null>(value && value.isValid() ? value : defaultToday ? moment() : null);
  const [dateText, setDateText] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [datepickerAnchorEl, setDatepickerAnchorEl] = useState<null | HTMLElement>(null);
  const datePickerBoxRef: RefObject<HTMLDivElement> = React.createRef();
  const regexRef: MutableRefObject<RegExp> = useRef(/\d{2}[a-zA-Z]{3}\d{2}/);

  useEffect(() => {
    setDatepickerAnchorEl(datePickerBoxRef.current);
    switch (dateFormat) {
      case 'DD-MM-YYYY':
      case 'MM-DD-YYYY':
        regexRef.current = /\d{2}-\d{2}-\d{4}/;
        break;
      case 'YYYY-MM-DD':
        regexRef.current = /\d{4}-\d{2}-\d{2}/;
        break;
      case 'DD/MM/YYYY':
      case 'MM/DD/YYYY':
        regexRef.current = /\d{2}\/\d{2}\/\d{4}/;
        break;
      case 'DD/MM/YY':
      case 'MM/DD/YY':
        regexRef.current = /\d{2}\/\d{2}\/\d{2}/;
        break;
      default:
        break;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setDateText(date?.format(dateFormat).toUpperCase() || '');
    if (onDateChange) onDateChange(date);
  }, [date]); // eslint-disable-line react-hooks/exhaustive-deps

  const onDatePickerTextChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateText(event.target.value);
  };

  const onDatePickerTextKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key.includes('Arrow')) {
      event.preventDefault();
      switch (event.key) {
        case 'ArrowUp':
          setDate((prevDate) => moment(prevDate, dateFormat).add(1, 'day'));
          break;
        case 'ArrowDown':
          setDate((prevDate) => moment(prevDate, dateFormat).subtract(1, 'day'));
          break;
        case 'ArrowLeft':
          setDate((prevDate) => moment(prevDate, dateFormat).subtract(7, 'day'));
          break;
        case 'ArrowRight':
          setDate((prevDate) => moment(prevDate, dateFormat).add(7, 'day'));
          break;
        default:
          break;
      }
    }
  };

  const onDatePickerTextBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
      if (regexRef.current.test(event.target.value)) {
        let updatedDate: Moment = moment(event.target.value, dateFormat);
        if (updatedDate.isValid()) {
          setDate(updatedDate);
          if (onBlur) onBlur();
          return;
        }
      }
      setDateText(date?.format(dateFormat).toUpperCase() || '');
    } else {
      setDate(null);
      setDateText('');
    }
    if (onBlur) onBlur();
  };

  const onDatePickerChangeHandler = (_value: Moment | null) => {
    setDate(_value);
    if (onBlur) onBlur();
  };

  return (
    <>
      <TextField
        {...textFieldProps}
        value={dateText}
        onChange={onDatePickerTextChangeHandler}
        onKeyDown={onDatePickerTextKeyDownHandler}
        onBlur={onDatePickerTextBlurHandler}
        placeholder={dateFormat}
        InputProps={{
          ref: datePickerBoxRef,
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                title='calendarToggle'
                aria-label='toggle calendar view'
                edge={textFieldProps.variant === 'standard' ? 'start' : 'end'}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <CalendarTodayIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <DatePicker
        value={date}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onChange={onDatePickerChangeHandler}
        PopperProps={{
          anchorEl: datepickerAnchorEl,
          placement: placement,
          modifiers: [
            {
              name: 'preventOverflow',
              enabled: true,
              options: {
                altAxis: true,
                altBoundary: true,
                tether: true,
                rootBoundary: 'document',
                padding: 8,
              },
            },
          ],
        }}
        ToolbarComponent={() => <></>}
        renderInput={() => <></>}
        componentsProps={{
          actionBar: {
            actions: ['clear', 'accept', 'today'],
          },
        }}
      ></DatePicker>
    </>
  );
};

export default TextFieldDatePicker;
