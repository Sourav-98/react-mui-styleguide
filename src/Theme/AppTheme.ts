import {
  PaletteMode,
  ThemeOptions
} from '@mui/material';
import { LightModePalette, DarkModePalette } from './AppPalette';
import ComponentOverrides from './ComponentOverrides';

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
  components: ComponentOverrides,
  typography: {
    // fontSize: 12.6,
    subtitle1: {
      fontSize: '0.8125em !important'
    }
  },
});

export default AppThemeOptions;
