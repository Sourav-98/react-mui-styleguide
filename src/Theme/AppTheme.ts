import { createTheme, filledInputClasses, inputClasses, outlinedInputClasses, inputBaseClasses } from "@mui/material";

const stdInputPadding = {
  paddingLR: 11,
  paddingTB: 10
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#026fdb",
      light: "#0270de",
      dark: "#026fdb",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          // backgroundColor: '#fff'
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: ({ownerState, theme}) => ({
          [`&:not(.${inputBaseClasses.disabled},.${inputBaseClasses.error}):hover::before`]: {
            borderWidth: '1px',
            borderColor: ownerState.color === 'secondary' ? theme.palette.secondary.main
              : ownerState.color === 'success' ? theme.palette.success.main
              : ownerState.color === 'warning' ? theme.palette.warning.main
              : ownerState.color === 'error' ? theme.palette.error.main
              : ownerState.color === 'info' ? theme.palette.info.main
              : theme.palette.primary.main
          }
        }),
        input: {
          padding: `${stdInputPadding.paddingTB}px ${stdInputPadding.paddingLR}px`
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ownerState, theme}) => ({
          [`&:not(.${inputBaseClasses.disabled},.${inputBaseClasses.error}):hover::before`]: {
            borderColor: ownerState.color === 'secondary' ? theme.palette.secondary.main
            : ownerState.color === 'success' ? theme.palette.success.main
            : ownerState.color === 'warning' ? theme.palette.warning.main
            : ownerState.color === 'error' ? theme.palette.error.main
            : ownerState.color === 'info' ? theme.palette.info.main
            : theme.palette.primary.main
          }
        }),
        input: {
          padding: `${stdInputPadding.paddingTB}px ${stdInputPadding.paddingLR}px`
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ownerState, theme}) => ({
          [`&:not(.${inputBaseClasses.disabled},.${inputBaseClasses.error}):hover > fieldset`]: {
            borderColor: ownerState.color === 'secondary' ? theme.palette.secondary.main
            : ownerState.color === 'success' ? theme.palette.success.main
            : ownerState.color === 'warning' ? theme.palette.warning.main
            : ownerState.color === 'error' ? theme.palette.error.main
            : ownerState.color === 'info' ? theme.palette.info.main
            : theme.palette.primary.main
          }
        }),
        input: {
          padding: `${stdInputPadding.paddingTB}px ${stdInputPadding.paddingLR}px`
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          [`& > .${filledInputClasses.input}`]: {
            paddingTop: `${stdInputPadding.paddingTB}px`,
            paddingBottom: `${stdInputPadding.paddingTB}px`,
            paddingLeft: `${stdInputPadding.paddingLR}px`,
          },
          [`& > .${inputClasses.input}`]: {
            paddingTop: `${stdInputPadding.paddingTB}px`,
            paddingBottom: `${stdInputPadding.paddingTB}px`,
            paddingLeft: `${stdInputPadding.paddingLR}px`,
          },
          [`& > .${outlinedInputClasses.input}`]: {
            paddingTop: `${stdInputPadding.paddingTB}px`,
            paddingBottom: `${stdInputPadding.paddingTB}px`,
            paddingLeft: `${stdInputPadding.paddingLR}px`,
          },
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        },
      }
    }
  }
});

export default theme;
