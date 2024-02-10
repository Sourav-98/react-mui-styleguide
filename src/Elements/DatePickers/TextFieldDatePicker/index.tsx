import { MutableRefObject, RefObject, createRef, useEffect, useRef, useState } from 'react';
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
  dateFormat = 'DDMMMYY',
  popperPlacement = 'bottom-end',
  value,
  defaultToday,
  onDateChange,
  onBlur,
  datePickerActions,
  ...textFieldProps
}: TextFieldDatePickerProps): JSX.Element => {
  const [date, setDate] = useState<Moment | null | undefined>(
    value && value.isValid() ? value : defaultToday ? moment() : null
  );
  const [dateText, setDateText] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [datepickerAnchorEl, setDatepickerAnchorEl] = useState<null | HTMLElement>(null);
  const datePickerBoxRef: RefObject<HTMLDivElement> = createRef();
  const dateRegexRef: MutableRefObject<RegExp> = useRef(/\d{2}[a-zA-Z]{3}\d{2}/);

  useEffect(() => {
    setDatepickerAnchorEl(datePickerBoxRef.current);
    switch (dateFormat) {
      case 'DD-MM-YYYY':
      case 'MM-DD-YYYY':
        dateRegexRef.current = /\d{2}-\d{2}-\d{4}/;
        break;
      case 'YYYY-MM-DD':
        dateRegexRef.current = /\d{4}-\d{2}-\d{2}/;
        break;
      case 'DD/MM/YYYY':
      case 'MM/DD/YYYY':
        dateRegexRef.current = /\d{2}\/\d{2}\/\d{4}/;
        break;
      case 'DD/MM/YY':
      case 'MM/DD/YY':
        dateRegexRef.current = /\d{2}\/\d{2}\/\d{2}/;
        break;
      default:
        dateRegexRef.current = /\d{2}[a-zA-Z]{3}\d{2}/;
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
    }
  };

  const onDatePickerTextBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
      /**
       * Check if date text field has the following types of text entered
       */
      if (dateRegexRef.current.test(event.target.value)) {
        /**
         * This means a specific date of the date format was typed
         */
        let updatedDate: Moment = moment(event.target.value, dateFormat);
        if (updatedDate.isValid()) {
          setDate(updatedDate);
          if (onBlur) onBlur();
          return;
        }
      } else if (event.target.value === '.') {
        /**
         * This means today's date is to be set
         */
        setDate(moment());
        return;
      } else if (/^([+-])([0-9]+)$/.test(event.target.value)) {
        /**
         * This means a shortcut date entry was made, relative to today's date: [+|-]xxx
         */
        let regExpMatch = event.target.value.match(/^([+-])([0-9]+)$/);
        if (regExpMatch !== null) {
          switch (regExpMatch[1]) {
            case '+':
              setDate(moment().add(parseInt(regExpMatch[2]), 'day'));
              break;
            case '-':
              setDate(moment().subtract(parseInt(regExpMatch[2]), 'day'));
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
    if (onBlur) onBlur();
  };

  const onDatePickerChangeHandler = (_value: Moment | null | undefined) => {
    setDate(_value);
    if (onBlur) onBlur();
  };

  return (
    <>
      <InputField
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
                title='open calendar'
                aria-label='toggle calendar'
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
          // ...datePickerProps.PopperProps
        }}
        ToolbarComponent={() => <></>}
        renderInput={() => <></>}
        componentsProps={{
          actionBar: {
            actions: datePickerActions || ['clear', 'accept', 'today'],
          },
        }}
      />
    </>
  );
};

export default TextFieldDatePicker;