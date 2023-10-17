import './UISSpinner.css';

import { UISSpinnerType } from './UISSpinnerType';

import { useTheme } from '@mui/material';

/**
 * @description a simple CSS spinner pre-loader, with Material UI Theme-based color schematics.
 * @note 'white' overrides both the 'variant' and 'dark' theme props
 * @param {UISSpinnerType} spinnerProps
 * @returns {JSX.Element}
 */
const UISSpinner: React.FC<UISSpinnerType> = ({ variant, xs, sm, lg, white, dark }: UISSpinnerType): JSX.Element => {
  const theme = useTheme();

  return (
    <div className={`uis-spinner-div${xs ? ' xs' : sm ? ' sm' : lg ? ' lg' : ' md'}`}>
      <div
        className={`uis-spinner-dual-ring`}
        style={{
          borderTopColor: white ? 'white' : variant === 'secondary' ? theme.palette.secondary.main
            : variant === 'success' ? theme.palette.success.main
            : variant === 'error' ? theme.palette.error.main
            : variant === 'warning' ? theme.palette.warning.main
            : variant === 'info' ? theme.palette.info.main
            : theme.palette.primary.main,
          borderBottomColor: white ? 'white' : variant === 'secondary' ? theme.palette.secondary.main
          : variant === 'success' ? theme.palette.success.main
          : variant === 'error' ? theme.palette.error.main
          : variant === 'warning' ? theme.palette.warning.main
          : variant === 'info' ? theme.palette.info.main
          : theme.palette.primary.main,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
        }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default UISSpinner;
