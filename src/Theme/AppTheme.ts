import {
  createTheme,
  filledInputClasses,
  inputClasses,
  outlinedInputClasses,
  inputBaseClasses,
} from "@mui/material";

const stdInputPadding = {
  LR: 12,
  TB: 11,
};

const smallInputPadding = {
  LR: 9,
  TB: 8
}

const theme = createTheme({
  palette: {
    mode: "light",
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
          [`& > .${inputBaseClasses.input}`]: {
            paddingTop: `${stdInputPadding.TB}px`,
            paddingBottom: `${stdInputPadding.TB}px`,
            paddingLeft: `${stdInputPadding.LR}px`,
          },
          [`& > .${inputBaseClasses.inputSizeSmall}`]: {
            paddingTop: `${smallInputPadding.TB}px`,
            paddingBottom: `${smallInputPadding.TB}px`,
            paddingLeft: `${smallInputPadding.LR}px`,
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
          [`& > .${inputBaseClasses.inputSizeSmall}`]: {
            paddingTop: `${smallInputPadding.TB}px`,
            paddingBottom: `${smallInputPadding.TB}px`,
            paddingLeft: `${smallInputPadding.LR}px`,
          },
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          [`&:not(.${inputBaseClasses.disabled},.${inputBaseClasses.error}):hover::before`]:
            {
              borderWidth: "1px",
              borderColor:
                ownerState.color === "secondary"
                  ? theme.palette.secondary.main
                  : ownerState.color === "success"
                  ? theme.palette.success.main
                  : ownerState.color === "warning"
                  ? theme.palette.warning.main
                  : ownerState.color === "error"
                  ? theme.palette.error.main
                  : ownerState.color === "info"
                  ? theme.palette.info.main
                  : theme.palette.primary.main,
            },
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          [`&:not(.${inputBaseClasses.disabled},.${inputBaseClasses.error}):hover::before`]:
            {
              borderColor:
                ownerState.color === "secondary"
                  ? theme.palette.secondary.main
                  : ownerState.color === "success"
                  ? theme.palette.success.main
                  : ownerState.color === "warning"
                  ? theme.palette.warning.main
                  : ownerState.color === "error"
                  ? theme.palette.error.main
                  : ownerState.color === "info"
                  ? theme.palette.info.main
                  : theme.palette.primary.main,
            },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          [`&:not(.${inputBaseClasses.disabled},.${inputBaseClasses.error}):hover > fieldset`]:
            {
              borderColor:
                ownerState.color === "secondary"
                  ? theme.palette.secondary.main
                  : ownerState.color === "success"
                  ? theme.palette.success.main
                  : ownerState.color === "warning"
                  ? theme.palette.warning.main
                  : ownerState.color === "error"
                  ? theme.palette.error.main
                  : ownerState.color === "info"
                  ? theme.palette.info.main
                  : theme.palette.primary.main,
            },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
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
          paddingTop: "0px !important",
          paddingBottom: "0px !important",
          paddingLeft: "0px !important",
        }),
      },
    },
  },
});

export default theme;
