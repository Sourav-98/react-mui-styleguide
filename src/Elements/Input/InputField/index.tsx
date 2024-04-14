import React, { useState } from 'react';
import { Box, FormLabel, TextField, Tooltip } from '@mui/material';
import { InputFieldProps } from './InputField';

/**
 * An MUi `TextField` HOC with a persistent `FormLabel`
 *
 * @param param0 `InputFieldProps`
 * @returns
 */
const InputField: React.FC<InputFieldProps> = ({
  sx,
  label,
  labelSx,
  textFieldSx,
  title,
  children,
  ...textFieldProps
}): JSX.Element => {
  const [isTooltipVisible, setTooltipVisible] = useState<boolean>(false);

  //Custom open/close tooltip handling for Select (dropdown) since tooltip was not closing on click and was displaying over items in dropdown
  let enterTimer: any;
  function handleTooltip(openState: boolean) {
    if (openState) {
      if (!!enterTimer) {
        clearTimeout(enterTimer);
      }
      enterTimer = setTimeout(() => setTooltipVisible(openState), 500);
    }
    if (!openState) {
      clearTimeout(enterTimer);
      setTooltipVisible(openState);
    }
  }
  return (
    <Box display={'flex'} flexDirection={'column'} sx={sx}>
      {label !== undefined && (
        <FormLabel
          htmlFor={textFieldProps.name}
          required={textFieldProps.required && !!label}
          sx={{ mb: 1, whiteSpace: 'nowrap', ...labelSx }}
        >
          <span style={{ opacity: !!label ? 1 : 0 }}>{label || 'Label'}</span>
        </FormLabel>
      )}
      <Tooltip
        title={title}
        placement='bottom'
        PopperProps={{
          style: {
            zIndex: 1299
          }
        }}
      >
        <TextField
          {...textFieldProps}
          InputProps={{
            ...textFieldProps.InputProps,
            required: textFieldProps.required,
            /**
             * @note prevent title from propagating to the HTML `input` element. This disables the browser's `required` field
             */
            title: '',
          }}
          sx={textFieldSx}
          {...(textFieldProps.select && {
            onMouseEnter: (e) => {
              handleTooltip(true);
            },
            onMouseLeave: (e) => {
              handleTooltip(false);
            },
            onMouseDown: (e) => {
              handleTooltip(false);
            },
          })}
        >
          {children}
        </TextField>
      </Tooltip>
    </Box>
  );
};

export default InputField;
