import {
  Autocomplete,
  AutocompleteInputChangeReason,
  CircularProgress,
  Box,
  Typography,
  autocompleteClasses,
  TextField,
  alpha,
} from '@mui/material';
import { MutableRefObject, SyntheticEvent, useEffect, useRef, useState } from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { StationTypeAheadProps } from './StationTypeAhead';
import { StationOption, stationSearchMockAPI } from 'Services/api.service';

export const StationTypeAhead: React.FC<StationTypeAheadProps> = ({
  value,
  sx,
  onStationChange,
  ...textFieldProps
}): JSX.Element => {
  /**
   * The suggestive search `TextField` input value. It is set to `value` (if passed from the parent component) or an empty string
   */
  const [stationSearchText, setStationSearchText] = useState<string>(() => value || '');
  /**
   * A boolean marker to indicate whether search has to be performed or not
   */
  const [isToBeSearched, setToBeSearched] = useState<boolean>(false);
  /**
   * The list to stations for the suggestive search options
   */
  const [stations, setStations] = useState<StationOption[]>(() => []);
  /**
   * A boolean marker indicating whether the list of `stations` to be loaded based on the `stationSearchText` are being fetched or not
   */
  const [isLoading, setLoading] = useState<boolean>(() => false);
  /**
   * A debounce `Timeout` mechanism for performing the suggestive search
   */
  const debounceTimeout: MutableRefObject<NodeJS.Timeout | undefined> = useRef();
  /**
   * the debounce duration for fetching the `stations` list based on the `stationSearchText`
   */
  const debounceDuration: number = 550;
  /**
   * the maximum length of the station code
   */
  const maxStationCodeLength: number = 3;

  useEffect(() => {
    let abortController = new AbortController();
    if (isToBeSearched && stationSearchText !== '') {
      /**
       * If the search text is modified and is not
       */
      setLoading(true);
      debounceTimeout.current = setTimeout(() => {
        stationSearchMockAPI(stationSearchText, {
          signal: abortController.signal,
        })
          .then((res) => {
            setStations(res);
            setLoading(false);
          })
          .catch((err) => {
            if (err.code !== 'ERR_CANCELED') {
              /** Continue with error handling */

              setLoading(false);
            }
          });
      }, debounceDuration);
    }
    return () => {
      /**
       * To cancel the previous request for ensuring single station list render, or to reset the debounce timeout
       */
      abortController.abort();
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      setStations([]);
      setLoading(false);
    };
  }, [stationSearchText, isToBeSearched]);

  /**
   * the textbox onChange handler, to handle `stationSearchText` change made by the user
   * @param _
   * @param inputValue
   * @param reason
   * @returns
   */
  const stationSearchOnTextChangeHandler = (
    _: SyntheticEvent<Element, Event>,
    inputValue: string,
    reason: AutocompleteInputChangeReason
  ) => {
    if (inputValue.length > maxStationCodeLength) {
      /** Prevent updating the search text if it exceeds the character limit */
      return;
    }
    setStationSearchText(inputValue);
    if (reason === 'input') {
      /** if reason is `input` and the inputValue is not empty string, that means search has to be performed */
      setToBeSearched(true);
    } else {
      /** else, prevent performing any search */
      setToBeSearched(false);
    }
    /**
     * onStationChange callback to pass the updated station code text to the parent component
     */
    if (onStationChange) {
      onStationChange(inputValue);
    }
  };

  return (
    <Autocomplete
      /** For Station Suggestive Search, allow users to type any station code. Hence, the Autocomplete field will be of type `freeSolo` */
      freeSolo
      disabled={textFieldProps.disabled}
      inputValue={stationSearchText}
      sx={sx}
      options={stations}
      componentsProps={{
        popper: {
          sx: {
            display: 'flex',
          },
        },
        paper: {
          elevation: 4,
          sx: {
            display: 'flex',
            overflow: 'visible',
            whiteSpace: 'nowrap',
          },
        },
      }}
      onInputChange={stationSearchOnTextChangeHandler}
      onChange={(_) => {
        setStations([]);
      }}
      onBlur={() => {
        if (debounceTimeout.current) {
          clearTimeout(debounceTimeout.current);
        }
        setLoading(false);
      }}
      filterOptions={(options) => options}
      isOptionEqualToValue={(option, value) => option.OId === value.OId}
      getOptionLabel={(option) => {
        if (typeof option === 'string') return option;
        else return (option as StationOption).stationCode;
      }}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(`${option.stationCode} - ${option.stationName}`, inputValue, { insideWords: true });
        const parts = parse(`${option.stationCode} - ${option.stationName}`, matches);
        return (
          <Box
            component={'li'}
            {...props}
            sx={(theme) => ({
              [`&.${autocompleteClasses.option}`]: {
                '&.Mui-focused': {
                  backgroundColor:
                    textFieldProps.color === 'secondary'
                      ? alpha(theme.palette.secondary[200], 0.28)
                      : textFieldProps.color === 'success'
                      ? alpha(theme.palette.success[200], 0.28)
                      : textFieldProps.color === 'error'
                      ? alpha(theme.palette.error[200], 0.28)
                      : textFieldProps.color === 'warning'
                      ? alpha(theme.palette.warning[200], 0.28)
                      : textFieldProps.color === 'info'
                      ? alpha(theme.palette.info[200], 0.28)
                      : alpha(theme.palette.primary[200], 0.28),
                },
                '&[aria-selected="true"]': {
                  backgroundColor:
                    textFieldProps.color === 'secondary'
                      ? alpha(theme.palette.secondary[100], 0.4)
                      : textFieldProps.color === 'success'
                      ? alpha(theme.palette.success[100], 0.4)
                      : textFieldProps.color === 'error'
                      ? alpha(theme.palette.error[200], 0.4)
                      : textFieldProps.color === 'warning'
                      ? alpha(theme.palette.warning[100], 0.4)
                      : textFieldProps.color === 'info'
                      ? alpha(theme.palette.info[200], 0.4)
                      : alpha(theme.palette.primary[200], 0.4),
                },
                '&[aria-selected="true"].Mui-focused': {
                  backgroundColor:
                    textFieldProps.color === 'secondary'
                      ? alpha(theme.palette.secondary[200], 0.58)
                      : textFieldProps.color === 'success'
                      ? alpha(theme.palette.success[200], 0.58)
                      : textFieldProps.color === 'error'
                      ? alpha(theme.palette.error[200], 0.58)
                      : textFieldProps.color === 'warning'
                      ? alpha(theme.palette.warning[200], 0.58)
                      : textFieldProps.color === 'info'
                      ? alpha(theme.palette.info[200], 0.58)
                      : alpha(theme.palette.primary[200], 0.58),
                },
              },
            })}
          >
            <Typography variant='subtitle1'>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </Typography>
          </Box>
        );
      }}
      renderInput={(props) => (
        <TextField
          {...props}
          {...textFieldProps}
          InputProps={{
            ...props.InputProps,
            endAdornment: (
              <>
                {isLoading && <CircularProgress color={textFieldProps.color} size={20} />}
                {props.InputProps.endAdornment}
              </>
            ),
          }}
          inputProps={{
            ...props.inputProps,
            style: {
              textTransform: 'uppercase',
            },
          }}
        />
      )}
    />
  );
};
