import { AutocompleteRenderInputParams, TextFieldProps } from '@mui/material';
import { FormInputFieldProps } from 'Elements/Input/FormInputField/FormInputField';
import { InputFieldProps } from 'Elements/Input/InputField/InputField';

export type MultiSelectStationTypeAheadProps = Omit<InputFieldProps, 'value'> & {
  /**
   * @description a list of station code values to be pre-initialized with
   */
  values?: Array<string>;
  /**
   * @description a callback function to send the value of the currently selected or set station
   * @param {string} selectedStation
   */
  onStationsListChange?: (selectedStations: Array<string>) => void;
};

export type FormMultiSelectStationTypeAheadProps = FormInputFieldProps & MultiSelectStationTypeAheadProps;
