import { AutocompleteRenderInputParams, TextFieldProps } from '@mui/material';
import { FormInputFieldProps } from 'Elements/Input/FormInputField/FormInputField';
import { InputFieldProps } from 'Elements/Input/InputField/InputField';

export type StationTypeAheadProps = InputFieldProps & {
  /**
   * @description a callback function to send the value of the currently selected or set station
   * @param {string} selectedStation
   */
  onStationChange?: (selectedStation: string) => void;
};

export type FormStationTypeAheadProps = FormInputFieldProps & StationTypeAheadProps;
