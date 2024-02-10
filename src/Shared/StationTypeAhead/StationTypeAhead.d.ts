import { TextFieldProps } from '@mui/material';

export interface StationTypeAheadProps extends Partial<Omit<TextFieldProps, 'value' | 'color'>> {
  /**
   * the initial station value to be set for the station typeahead component
   * @override TextField's `value`
   */
  value?: string;
  /**
   * @description a callback function to send the value of the current selected or set station
   * @param {string} selectedStation
   */
  onStationChange?: (selectedStation: string) => void;
}
