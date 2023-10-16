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
import { MutableRefObject, SyntheticEvent, useRef, useState, useTransition } from 'react';
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
  const [isStationsLoading, startStationsLoading] = useTransition();
  const [stationSearchText, setStationSearchText] = useState<string>(() => value || '');
  const [stations, setStations] = useState<StationOption[]>(() => []);
  const [isLoading, setLoading] = useState<boolean>(() => false);
  const debounceTimeout: MutableRefObject<NodeJS.Timeout | undefined> = useRef();

  const setAvailableStations = (stationList: StationOption[]) => {
    startStationsLoading(() => {
      setStations(stationList);
    });
  };

  const resetTimeout = () => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    setLoading(false);
  };

  const fetchStations = (searchText: string) => {
    resetTimeout();
    setLoading(true);
    debounceTimeout.current = setTimeout(() => {
      stationSearchMockAPI(searchText)
        .then((res) => {
          setAvailableStations(res);
        })
        .finally(() => setLoading(false));
    }, 550);
  };

  const stationSearchOnTextChangeHandler = (
    _: SyntheticEvent<Element, Event>,
    inputValue: string,
    reason: AutocompleteInputChangeReason
  ) => {
    if (inputValue.length > 3) return;
    setStationSearchText(inputValue);
    if (reason === 'clear' || reason === 'reset' || inputValue === '') {
      resetTimeout();
      setAvailableStations([]);
    } else {
      fetchStations(inputValue);
    }
    if (onStationChange) {
      onStationChange(inputValue);
    }
  };

  return (
    <Autocomplete
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
      onChange={(_, value) => {
        setAvailableStations([]);
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
                  backgroundColor: textFieldProps.color === 'secondary' ? alpha(theme.palette.secondary[200], 0.4)
                    : textFieldProps.color === 'success' ? alpha(theme.palette.success[200], 0.4)
                    : textFieldProps.color === 'error' ? alpha(theme.palette.error[200], 0.4)
                    : textFieldProps.color === 'warning' ? alpha(theme.palette.warning[200], 0.4)
                    : textFieldProps.color === 'info' ? alpha(theme.palette.info[200], 0.4)
                    : alpha(theme.palette.primary[200], 0.4)
                },
                '&[aria-selected="true"]': {
                  backgroundColor: textFieldProps.color === 'secondary' ? alpha(theme.palette.secondary[100], 0.5)
                    : textFieldProps.color === 'success' ? alpha(theme.palette.success[100], 0.5)
                    : textFieldProps.color === 'error' ? alpha(theme.palette.error[200], 0.5)
                    : textFieldProps.color === 'warning' ? alpha(theme.palette.warning[100], 0.5)
                    : textFieldProps.color === 'info' ? alpha(theme.palette.info[200], 0.5)
                    : alpha(theme.palette.primary[200], 0.25)
                },
                '&[aria-selected="true"].Mui-focused': {
                  backgroundColor: textFieldProps.color === 'secondary' ? alpha(theme.palette.secondary[200], 0.6)
                    : textFieldProps.color === 'success' ? alpha(theme.palette.success[200], 0.6)
                    : textFieldProps.color === 'error' ? alpha(theme.palette.error[200], 0.6)
                    : textFieldProps.color === 'warning' ? alpha(theme.palette.warning[200], 0.6)
                    : textFieldProps.color === 'info' ? alpha(theme.palette.info[200], 0.6)
                    : alpha(theme.palette.primary[200], 0.6)
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
                {(isLoading || isStationsLoading) && <CircularProgress color={textFieldProps.color} size={20} />}
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
