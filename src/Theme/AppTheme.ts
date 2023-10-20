import { PaletteMode, ThemeOptions, alpha, inputBaseClasses } from '@mui/material';
import { LightModePalette, DarkModePalette } from './AppPalette';

declare module '@mui/material/TextField' {
  interface BaseTextFieldProps {
    touched?: 'true' | 'false';
  }
}

declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter: string;
    darker: string;
    saturated: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }
}

const stdInputPadding = {
  LR: 14,
  TB: 13,
};

const smallInputPadding = {
  LR: 9,
  TB: 8,
};

export const AppThemeOptions = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          ...LightModePalette,
        }
      : {
          // palette values for dark mode
          ...DarkModePalette,
        }),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          [`& > .${inputBaseClasses.input}`]: {
            paddingTop: `${stdInputPadding.TB}px`,
            paddingBottom: `${stdInputPadding.TB}px`,
            paddingLeft: `${stdInputPadding.LR}px`,
          },
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        },
        sizeSmall: {
          [`& > .${inputBaseClasses.inputSizeSmall}`]: {
            paddingTop: `${smallInputPadding.TB}px`,
            paddingBottom: `${smallInputPadding.TB}px`,
            paddingLeft: `${smallInputPadding.LR}px`,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          [`&:not(.${inputBaseClasses.disabled},.${inputBaseClasses.error}):hover::before`]: {
            borderWidth: '1px',
            borderColor:
              ownerState.color === 'secondary'
                ? theme.palette.secondary.main
                : ownerState.color === 'success'
                ? theme.palette.success.main
                : ownerState.color === 'warning'
                ? theme.palette.warning.main
                : ownerState.color === 'error'
                ? theme.palette.error.main
                : ownerState.color === 'info'
                ? theme.palette.info.main
                : theme.palette.primary.main,
          },
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          [`&:not(.${inputBaseClasses.disabled},.${inputBaseClasses.error}):hover::before`]: {
            borderColor:
              ownerState.color === 'secondary'
                ? theme.palette.secondary.main
                : ownerState.color === 'success'
                ? theme.palette.success.main
                : ownerState.color === 'warning'
                ? theme.palette.warning.main
                : ownerState.color === 'error'
                ? theme.palette.error.main
                : ownerState.color === 'info'
                ? theme.palette.info.main
                : theme.palette.primary.main,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          [`& > fieldset`]: {
            transition: theme.transitions.create('border', {
              easing: theme.transitions.easing.easeIn,
              duration: 80,
            }),
          },
          [`&:not(.${inputBaseClasses.disabled},.${inputBaseClasses.error}):hover > fieldset`]: {
            transition: theme.transitions.create('border', {
              easing: theme.transitions.easing.easeOut,
              duration: 80,
            }),
            borderColor:
              ownerState.color === 'secondary'
                ? theme.palette.secondary.main
                : ownerState.color === 'success'
                ? theme.palette.success.main
                : ownerState.color === 'warning'
                ? theme.palette.warning.main
                : ownerState.color === 'error'
                ? theme.palette.error.main
                : ownerState.color === 'info'
                ? theme.palette.info.main
                : theme.palette.primary.main,
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.touched === 'true' && {
            [`& > .${inputBaseClasses.root}`]: {
              backgroundColor: alpha(
                ownerState.color === 'secondary'
                  ? theme.palette.secondary.main
                  : ownerState.color === 'success'
                  ? theme.palette.success.main
                  : ownerState.color === 'error'
                  ? theme.palette.error.main
                  : ownerState.color === 'warning'
                  ? theme.palette.warning.main
                  : ownerState.color === 'info'
                  ? theme.palette.info.main
                  : theme.palette.primary.main,
                0.2
              ),
            },
          }),
        }),
      },
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: ({ ownerState }) => ({
          [`& > .${inputBaseClasses.inputSizeSmall}`]: {
            paddingTop: `${smallInputPadding.TB}px !important`,
            paddingBottom: `${smallInputPadding.TB}px !important`,
            paddingLeft: `${smallInputPadding.LR}px !important`,
          },
          [`& > .${inputBaseClasses.input}`]: {
            paddingTop: `${stdInputPadding.TB}px`,
            paddingBottom: `${stdInputPadding.TB}px`,
            paddingLeft: `${stdInputPadding.LR}px`,
          },
          paddingTop: '0px !important',
          paddingBottom: '0px !important',
          paddingLeft: '0px !important',
        }),
      },
    },
  },
  typography: {
    fontSize: 12.6,
  },
});

export default AppThemeOptions;
