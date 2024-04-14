import React, { RefObject, createRef, useEffect, useState } from 'react';
import { XDatePickerProps } from './XDatePicker';
import moment, { Moment } from 'moment';
import InputField from 'Elements/Input/InputField';
import { IconButton, InputAdornment } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DatePicker } from '@mui/x-date-pickers';

/**
 * A typeable date-picker component, with a configurable `dateFormat`.
 * Types of additional text inputs allowed:
 *    . -> today's date
 *    +x -> x days ahead of today's date
 *    -x -> x days behind of today's date
 * @param {XDatePickerProps} datePickerProps
 * @returns
 */
const XDatePicker: React.FC<XDatePickerProps> = ({
  popperPlacement = 'bottom-end',
  value,
  defaultToday,
  onChange,
  onBlur,
  datePickerActions,
  datePickerMinDate,
  datePickerMaxDate,
  ...inputFieldProps
}: XDatePickerProps): JSX.Element => {
  const dateFormat = 'DDMMMYY';
  /**
   * This is to check if just the complete was entered in the `DDMMMYY` format.
   */
  const dateFormatRegex = /^\d{2}[a-zA-Z]{3}\d{2}$/;
  /**
   * This is to check if just the day and the month was entered in the `DDMMM` format. `XDatePicker` will automatically add the current year to the selection.
   */
  const semiDateFormatRegex = /^\d{2}[a-zA-Z]{3}$/;
  /**
   * This is to check if the date entry was made relative to today's date: [+|-]xxx (where xxx denotes any digit)
   * @note just entering `+` or `-`, without an offset number will perform an offset date selection by `1 day`
   */
  const offsetDateRegex = /^([+-])([0-9]*)$/;
  const [date, setDate] = useState<Moment | null>(null);
  const [dateText, setDateText] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [datepickerAnchorEl, setDatepickerAnchorEl] = useState<null | HTMLElement>(null);
  const datePickerBoxRef: RefObject<HTMLDivElement> = createRef();

  useEffect(() => {
    if (defaultToday && !value) {
      let updatedDate = moment.utc();
      setDate(updatedDate);
      onChange && onChange(updatedDate);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setDatepickerAnchorEl(datePickerBoxRef.current);
  }, [datePickerBoxRef]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log('Value: ', value, ' Moment -> ', moment.utc(value));
    let updatedDate = null;
    switch (typeof value) {
      case 'number': updatedDate = moment.utc(value); break;
      case 'string': updatedDate = moment.utc(value, dateFormat); break;
      default : updatedDate = value ? moment.utc(value) : null;
    }
    setDate(updatedDate);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setDateText(date ? (!date.isValid() ? 'INDEF' : date?.format(dateFormat).toUpperCase()) : '');
  }, [date]); // eslint-disable-line react-hooks/exhaustive-deps

  const onDatePickerTextChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateText(event.target.value);
  };

  const onDatePickerTextKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    let updatedDate: Moment | null = null;
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      if (date !== null) {
        switch (event.key) {
          case 'ArrowUp':
            updatedDate = moment.utc(date, dateFormat).add(1, 'day');
            // setDate((prevDate) => moment.utc(prevDate, dateFormat).add(1, 'day'));
            break;
          case 'ArrowDown':
            updatedDate = moment.utc(date, dateFormat).subtract(1, 'day');
            // setDate((prevDate) => moment.utc(prevDate, dateFormat).subtract(1, 'day'));
            break;
          default:
            break;
        }
      }
    }
    if (updatedDate && updatedDate.isValid()) {
      setDate(updatedDate);
      onChange && onChange(updatedDate);
    }
  };

  const onDatePickerTextBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    let updatedDate = date;
    if (event.target.value === '') {
      updatedDate = null;
    } else {
      /**
       * Check if date text field has the following types of text entered
       */
      if (dateFormatRegex.test(event.target.value) || semiDateFormatRegex.test(event.target.value)) {
        /**
         * This means that the text entered is in the format of DDMMMYY or DDMMM
         */
        let dateText = event.target.value;
        if (event.target.value.length === 5) {
          dateText += new Date().getFullYear().toString().slice(2);
        }
        updatedDate = moment.utc(dateText, dateFormat);
      } else if (event.target.value === '.') {
        /**
         * This means today's date is to be set
         */
        updatedDate = moment.utc();
      } else if (offsetDateRegex.test(event.target.value)) {
        let regExpMatch = event.target.value.match(offsetDateRegex);
        if (regExpMatch !== null) {
          switch (regExpMatch[1]) {
            case '+':
              updatedDate = moment.utc().add(parseInt(regExpMatch[2] || '1'), 'day');
              break;
            case '-':
              updatedDate = moment.utc().subtract(parseInt(regExpMatch[2] || '1'), 'day');
              break;
            default:
              break;
          }
        }
      }
    }
    setDate(updatedDate);
    onChange && onChange(updatedDate);
    onBlur && onBlur();
  };

  const onDatePickerChangeHandler = (_value: Moment | null) => {
    setDate(_value);
    onChange && onChange(_value);
    onBlur && onBlur();
  };

  return (
    <>
      <InputField
        {...inputFieldProps}
        value={dateText}
        onChange={onDatePickerTextChangeHandler}
        onKeyDown={onDatePickerTextKeyDownHandler}
        onBlur={onDatePickerTextBlurHandler}
        placeholder={dateFormat}
        InputProps={{
          ...inputFieldProps.InputProps,
          ref: datePickerBoxRef,
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                tabIndex={-1}
                title='open calendar'
                aria-label='toggle calendar'
                onClick={() => setIsOpen((prev) => !prev)}
                disabled={inputFieldProps.disabled}
              >
                <CalendarTodayIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        inputProps={{
          ...inputFieldProps.inputProps,
          style: {
            ...inputFieldProps?.inputProps?.style,
            textTransform: 'uppercase',
          },
        }}
      />
      <DatePicker
        value={date}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onChange={onDatePickerChangeHandler}
        minDate={datePickerMinDate}
        maxDate={datePickerMaxDate}
        slotProps={{
          popper: {
            anchorEl: datepickerAnchorEl,
            placement: popperPlacement,
          },
          actionBar: {
            actions: datePickerActions || ['clear', 'accept', 'today'],
          },
        }}
        slots={{
          toolbar: () => <></>,
        }}
        sx={{
          height: 0,
          maxHeight: 0,
          display: 'none',
        }}
      />
    </>
  );
};

export default XDatePicker;
