import { PaletteOptions, getContrastRatio } from '@mui/material/styles';
import { setLightness, darken, lighten, saturate } from 'polished';

const primaryMain_light: string = '#3178c4';
const secondaryMain_light: string = '#4d9ff7';

const generatePaletteColor = (color: string) => ({
  main: color,
  light: lighten(0.15, color),
  lighter: lighten(0.3, color),
  dark: darken(0.02, color),
  darker: darken(0.05, color),
  saturated: saturate(0.2, color),
  contrastText: getContrastRatio(color, '#fff') > 4.5 ? '#fff' : '#111',
  900: setLightness(0.1, color),
  800: setLightness(0.2, color),
  700: setLightness(0.3, color),
  600: setLightness(0.4, color),
  500: setLightness(0.5, color),
  400: setLightness(0.6, color),
  300: setLightness(0.7, color),
  200: setLightness(0.8, color),
  100: setLightness(0.9, color),
  50: setLightness(0.95, color),
});

export const LightModePalette: PaletteOptions = {
  primary: generatePaletteColor(primaryMain_light),
  secondary: generatePaletteColor(secondaryMain_light),
  success: generatePaletteColor('#2e7d32'),
  error: generatePaletteColor('#d32f2f'),
  warning: generatePaletteColor('#ed6c02'),
  info: generatePaletteColor('#0288d1'),
  background: {
    default: generatePaletteColor(primaryMain_light)[100]
  }
};

export const DarkModePalette: PaletteOptions = {
  primary: generatePaletteColor(primaryMain_light),
  secondary: generatePaletteColor(secondaryMain_light),
  success: generatePaletteColor('#66bb6a'),
  error: generatePaletteColor('#f44336'),
  warning: generatePaletteColor('#ffa726'),
  info: generatePaletteColor('#29b6f6'),
};
