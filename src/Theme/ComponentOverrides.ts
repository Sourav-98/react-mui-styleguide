import {
  alpha,
  autocompleteClasses,
  inputBaseClasses,
  listItemButtonClasses,
  menuItemClasses,
  Components,
  Theme,
  outlinedInputClasses,
  formHelperTextClasses,
  inputAdornmentClasses,
} from '@mui/material';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-data-grid/themeAugmentation';

const stdInputPadding = {
  LR: 0.8125,
  TB: 0.5625,
};

const smallInputPadding = {
  LR: 0.5625,
  TB: 0.375,
};

const ComponentOverrides: Components<Omit<Theme, 'components'>> = {
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        [`& > .${inputBaseClasses.input}`]: {
          paddingTop: `${stdInputPadding.TB}em`,
          paddingBottom: `${stdInputPadding.TB}em`,
          paddingLeft: `${stdInputPadding.LR}em`,
        },
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        [`&.${inputBaseClasses.adornedEnd}`]: {
          paddingRight: 0,
        },
        [`&.${inputBaseClasses.adornedStart}`]: {
          paddingLeft: 0,
        },
        // [`&.${inputBaseClasses.adornedEnd} > .${inputBaseClasses.input}`]: {
        //   paddingRight: 0,
        // },
        // [`&.${inputBaseClasses.adornedStart} > .${inputBaseClasses.input}`]: {
        //   paddingLeft: 0,
        // },
      },
      sizeSmall: {
        [`& > .${inputBaseClasses.inputSizeSmall}`]: {
          paddingTop: `${smallInputPadding.TB}em`,
          paddingBottom: `${smallInputPadding.TB}em`,
          paddingLeft: `${smallInputPadding.LR}em`,
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.required && {
          [`&::before`]: {
            height: '100%',
            borderLeftWidth: 4,
            borderLeftStyle: 'solid',
            borderLeftColor: ownerState.error
              ? theme.palette.error.main
              : ownerState.color === 'secondary'
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
        ...(ownerState.required && {
          [`&::before`]: {
            height: '100%',
            borderLeftWidth: 4,
            borderLeftStyle: 'solid',
            borderTopLeftRadius: theme.spacing(0.5),
            borderLeftColor: ownerState.error
              ? theme.palette.error.main
              : ownerState.color === 'secondary'
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
        [`&.${inputBaseClasses.root} > div.${inputAdornmentClasses.root}`]: {
          marginTop: `0px !important`
        },
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.required && {
          [`&::before`]: {
            content: '" "',
            position: 'absolute',
            width: 4,
            height: '100%',
            backgroundColor: ownerState.error
              ? theme.palette.error.main
              : ownerState.color === 'secondary'
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
            borderTopLeftRadius: theme.spacing(0.5),
            borderBottomLeftRadius: theme.spacing(0.5),
          },
        }),
        [`& > fieldset`]: {
          transition: theme.transitions.create('border', {
            easing: theme.transitions.easing.easeIn,
            duration: 80,
          }),
        },
        [`&:not(.${inputBaseClasses.disabled},.${inputBaseClasses.error}) > fieldset`]: {
          borderColor: alpha(theme.palette.grey[600], 0.98),
        },
        [`&.${inputBaseClasses.disabled} > fieldset.${outlinedInputClasses.notchedOutline}`]: {
          borderColor: alpha(theme.palette.grey[600], 0.35),
        },
        [`&:not(.${inputBaseClasses.disabled},.${inputBaseClasses.error}):hover > fieldset.${outlinedInputClasses.notchedOutline}`]:
          {
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
        [`&.${inputBaseClasses.adornedEnd}`]: {
          paddingRight: 0,
        },
      }),
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        [`& > p.${formHelperTextClasses.root}`]: {
          marginLeft: theme.spacing(0.2),
          marginRight: theme.spacing(0.2),
        },
      }),
    },
    defaultProps: {
      variant: 'outlined',
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      inputRoot: {
        [`& > .${inputBaseClasses.input}`]: {
          paddingTop: `${stdInputPadding.TB}em`,
          paddingBottom: `${stdInputPadding.TB}em`,
          paddingLeft: `${stdInputPadding.LR}em`,
          paddingRight: 0,
        },
        [`& > .${autocompleteClasses.endAdornment}`]: {
          top: `calc(50% - 0.845em)`,
        },
        [`&.${inputBaseClasses.sizeSmall} > .${inputBaseClasses.inputSizeSmall}`]: {
          paddingTop: `${smallInputPadding.TB}em`,
          paddingBottom: `${smallInputPadding.TB}em`,
          paddingLeft: `${smallInputPadding.LR}em`,
          paddingRight: 0,
        },
        [`&.${inputBaseClasses.sizeSmall} > .${autocompleteClasses.endAdornment}`]: {
          top: `calc(50% - 0.845em)`,
        },
        [`&.${inputBaseClasses.sizeSmall}`]: {
          paddingTop: '0px',
          paddingBottom: '0px',
          paddingLeft: '0px',
        },
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '0px',
      },
      option: ({ theme }) => ({
        [`&.${autocompleteClasses.option}`]: {
          margin: 5,
          borderRadius: 4,
          borderColor: alpha('#000', 0),
          borderWidth: 1,
          borderStyle: 'solid',
          '&.Mui-focused': {
            backgroundColor: alpha(theme.palette.primary[100], 0.28),
            borderColor: theme.palette.primary.main,
          },
          '&[aria-selected="true"]': {
            backgroundColor: alpha(theme.palette.primary[200], 0.4),
          },
          '&[aria-selected="true"].Mui-focused': {
            backgroundColor: alpha(theme.palette.primary[200], 0.58),
          },
        },
      }),
      listbox: {
        padding: 0,
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 5,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 4,
        borderColor: alpha('#000', 0),
        borderWidth: 1,
        borderStyle: 'solid',
        [`&.${listItemButtonClasses.focusVisible}`]: {
          backgroundColor: alpha(theme.palette.primary[100], 0.18),
          borderColor: theme.palette.primary.main,
        },
        [`&:hover`]: {
          backgroundColor: alpha(theme.palette.primary[200], 0.28),
        },
        [`&.${listItemButtonClasses.selected}`]: {
          backgroundColor: alpha(theme.palette.primary[200], 0.4),
        },
        [`&.${listItemButtonClasses.selected}.${listItemButtonClasses.focusVisible}`]: {
          backgroundColor: alpha(theme.palette.primary[200], 0.58),
        },
        [`&.${listItemButtonClasses.selected}:hover`]: {
          backgroundColor: alpha(theme.palette.primary[200], 0.58),
        },
      }),
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 5,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 4,
        borderColor: alpha('#000', 0),
        borderWidth: 1,
        borderStyle: 'solid',
        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: alpha(theme.palette.primary[100], 0.18),
          borderColor: theme.palette.primary.main,
        },
        [`&:hover`]: {
          backgroundColor: alpha(theme.palette.primary[200], 0.28),
        },
        [`&.${menuItemClasses.selected}`]: {
          backgroundColor: alpha(theme.palette.primary[200], 0.4),
        },
        [`&.${menuItemClasses.selected}.${menuItemClasses.focusVisible}`]: {
          backgroundColor: alpha(theme.palette.primary[200], 0.58),
        },
        [`&.${menuItemClasses.selected}:hover`]: {
          backgroundColor: alpha(theme.palette.primary[200], 0.58),
        },
      }),
    },
  },
  // MuiYearPicker: {
  //   styleOverrides: {
  //     root: ({ theme }: {theme: Theme}) => ({
  //       [`& > div > button`]
  //     })
  //   }
  // },
  MuiDayPicker: {
    styleOverrides: {
      header: {
        '& > span': {
          fontSize: 13,
        },
      },
    },
  },
  MuiPickersDay: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        fontSize: 13,
        backgroundColor: 'transparent',
        '&[aria-current="date"]': {
          backgroundColor: 'transparent',
        },
        '&:hover, &.Mui-focusVisible': {
          backgroundColor: alpha(theme.palette.primary[200], 0.28),
        },
      }),
      selected: {},
    },
  },
  MuiDatePicker: {
    defaultProps: {
      dayOfWeekFormatter: (day) => `${day}`,
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontWeight: 500,
        fontSize: '0.875rem',
      },
      asterisk: ({ theme }) => ({
        color: theme.palette.error.main,
        fontSize: '1.0rem',
        lineHeight: '0.5rem',
        fontWeight: 700,
      }),
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: '0.77rem',
      },
    },
  },
};

export default ComponentOverrides;
