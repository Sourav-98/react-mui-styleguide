import { SxProps, TextFieldProps } from '@mui/material';

export type InputFieldProps = TextFieldProps & {
  /**
   * @override TextField's `value`
   */
  value?: string;
  /**
   * The tooltip title text
   */
  tooltipTitle?: string;
  /**
   * label styles to be overridden
   */
  labelSx?: SxProps;
};
