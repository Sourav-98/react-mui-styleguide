import React from 'react';
import { IMaskInput } from "react-imask";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const ChargeCodeMask = React.forwardRef<HTMLInputElement, CustomProps>(
  ({ onChange, ...props }, ref) => (
    <IMaskInput
      {...props}
      mask="##,##,##"
      definitions={{
        '#': /[a-zA-Z]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  )
);