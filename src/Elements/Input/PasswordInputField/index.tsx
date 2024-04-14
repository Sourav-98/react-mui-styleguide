import React, { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import InputField from '../InputField';
import { InputFieldProps } from '../InputField/InputField';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

/**
 * An `InputField` HOC with a password visibility toggler
 *
 * @param param0 `InputFieldProps`
 * @returns
 */
const PasswordInputField: React.FC<Partial<Omit<InputFieldProps, 'children'>>> = ({
  ...inputFieldProps
}): JSX.Element => {
  const [isPasswordRevealed, setPasswordRevealed] = useState<boolean>(false);
  return (
    <InputField
      {...inputFieldProps}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton size='small' onClick={() => setPasswordRevealed((revealed) => !revealed)}>
              {isPasswordRevealed ? <VisibilityIcon fontSize='small' /> : <VisibilityOffIcon fontSize='small' />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      type={isPasswordRevealed ? 'text' : 'password'}
    />
  );
};

export default PasswordInputField;
