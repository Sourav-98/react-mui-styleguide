import { Box, FormLabel, TextField, Tooltip } from '@mui/material';
import { InputFieldProps } from './InputField';

/**
 * An MUi `TextField` wrapper component with a persistent `FormLabel`
 *
 * @param param0 `InputFieldProps`
 * @returns
 */
const InputField: React.FC<InputFieldProps> = ({ sx, label, labelSx, tooltipTitle, title, toolTipPlacement, ...textFieldProps }): JSX.Element => (
  <Box display={'flex'} flexDirection={'column'} sx={sx}>
    {label && (
      <FormLabel htmlFor={textFieldProps.name} required={textFieldProps.required} sx={{ mb: 0.5, whiteSpace: 'nowrap', ...labelSx }}>
        {label}
      </FormLabel>
    )}
    <Tooltip arrow title={tooltipTitle || title} placement={toolTipPlacement}>
      <TextField
        {...textFieldProps}
        InputProps={{
          ...textFieldProps.InputProps,
          required: textFieldProps.required
        }}
        inputProps={{
          ...textFieldProps.inputProps,
          title: ''
        }}
      />
    </Tooltip>
  </Box>
);

export default InputField;
