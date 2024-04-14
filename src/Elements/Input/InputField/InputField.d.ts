import { SxProps, TextFieldProps, Theme } from '@mui/material';

export type InputFieldProps = Omit<TextFieldProps, 'value'> & {
  value?: string;
  /**
   * label styles to be overridden
   */
  labelSx?: SxProps<Theme>;
  /**
   * `TextField` styles to be overridden
   */
  textFieldSx?: SxProps<Theme>;
  /**
   * Provision for `MenuItem` children components
   */
  children?: React.ReactNode
};
