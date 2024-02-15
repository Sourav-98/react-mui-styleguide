import { SxProps, TextFieldProps, TooltipProps } from '@mui/material';

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
  toolTipPlacement?: "bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start" | undefined
};
