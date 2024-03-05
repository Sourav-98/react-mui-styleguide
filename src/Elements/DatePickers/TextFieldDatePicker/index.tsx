import { RefObject, createRef, useEffect, useState } from 'react';
import { TextFieldDatePickerProps } from './TextFieldDatePicker';
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
 * @param {TextFieldDatePickerProps} datePickerProps
 * @returns
 */
const TextFieldDatePicker: React.FC<TextFieldDatePickerProps> = ({
  popperPlacement = 'bottom-end',
  value,
  defaultToday,
  onDateChange,
  // onBlur,
  datePickerActions,
  ...inputFieldProps
}: TextFieldDatePickerProps): JSX.Element => {
  const dateFormat = 'DDMMMYY';
  const dateFormatRegex = /^\d{2}[a-zA-Z]{3}\d{2}$/;
  const semiDateFormatRegex = /^\d{2}[a-zA-Z]{3}$/;
  const offsetDateRegex = /^([+-])([0-9]*)$/;
  const [date, setDate] = useState<Moment | null | undefined>(
    value ? value : defaultToday ? moment() : null
  );
  const [dateText, setDateText] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [datepickerAnchorEl, setDatepickerAnchorEl] = useState<null | HTMLElement>(null);
  const datePickerBoxRef: RefObject<HTMLDivElement> = createRef();
  

  useEffect(() => {
    setDatepickerAnchorEl(datePickerBoxRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setDateText(date ? !date.isValid() ? 'INDEF' : date?.format(dateFormat).toUpperCase() : '');
    if (onDateChange) onDateChange(date);
  }, [date]); // eslint-disable-line react-hooks/exhaustive-deps

  const onDatePickerTextChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateText(event.target.value);
  };

  const onDatePickerTextKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      if (date !== null) {
        switch (event.key) {
          case 'ArrowUp':
            setDate((prevDate) => moment(prevDate, dateFormat).add(1, 'day'));
            break;
          case 'ArrowDown':
            setDate((prevDate) => moment(prevDate, dateFormat).subtract(1, 'day'));
            break;
          // case 'ArrowLeft':
          //   setDate((prevDate) => moment(prevDate, dateFormat).subtract(7, 'day'));
          //   break;
          // case 'ArrowRight':
          //   setDate((prevDate) => moment(prevDate, dateFormat).add(7, 'day'));
          //   break;
          default:
            break;
        }
      }
    }
  };

  const onDatePickerTextBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
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
        let updatedDate = moment(dateText, dateFormat);
        /**
         * If the date entered is valid, then only update the entered date. Otherwise, retain the previous date selected.
         */
        if (updatedDate.isValid()) {
          setDate(updatedDate);
          // if (onBlur) onBlur();
          return;
        }
      } else if (event.target.value === '.') {
        /**
         * This means today's date is to be set
         */
        setDate(moment());
        return;
      } else if (offsetDateRegex.test(event.target.value)) {
        /**
         * This means a shortcut date entry was made, relative to today's date: [+|-]xxx
         */
        let regExpMatch = event.target.value.match(offsetDateRegex);
        if (regExpMatch !== null) {
          switch (regExpMatch[1]) {
            case '+':
              setDate(moment().add(parseInt(regExpMatch[2] || '1'), 'day'));
              break;
            case '-':
              setDate(moment().subtract(parseInt(regExpMatch[2] || '1'), 'day'));
              break;
            default:
              break;
          }
        }
        return;
      }
      setDateText(date?.format(dateFormat).toUpperCase() || '');
    } else {
      setDate(null);
      setDateText('');
    }
    // if (onBlur) onBlur();
  };

  const onDatePickerChangeHandler = (_value: Moment | null | undefined) => {
    setDate(_value);
    // if (onBlur) onBlur();
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
            textTransform: 'uppercase'
          }
        }}
      />
      <DatePicker
        value={date}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onChange={onDatePickerChangeHandler}
        minDate={moment('01JAN24', 'DDMMMYY')}
        maxDate={moment('01APR24', 'DDMMMYY')}
        slotProps={{
          popper: {
            anchorEl: datepickerAnchorEl,
            placement: popperPlacement,
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
          },
          actionBar: {
            actions: datePickerActions || ['clear', 'accept', 'today'],
          }
        }}
        slots={{
          toolbar: () => <></>,
        }}
        sx={{
          height: 0,
          maxHeight: 0,
          display: 'none'
        }}
      />
    </>
  );
};

export default TextFieldDatePicker;