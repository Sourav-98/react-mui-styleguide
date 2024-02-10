import { Box, FormLabel, TextField } from '@mui/material';
import { InputFieldProps } from './InputField';

/**
 * An MUi `TextField` wrapper component with a persistent `FormLabel`
 *
 * @param param0 `InputFieldProps`
 * @returns
 */
const InputField: React.FC<InputFieldProps> = ({ sx, label, labelSx, required, name, ...textFieldProps }): JSX.Element => (
  <Box display={'flex'} flexDirection={'column'} sx={sx}>
    {label && (
      <FormLabel htmlFor={name} required={required} sx={{ mb: 1, ...labelSx }}>
        {label}
      </FormLabel>
    )}
    <TextField name={name} required={required} {...textFieldProps} />
  </Box>
);

export default InputField;
